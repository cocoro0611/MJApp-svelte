<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import ButtonCount from "$lib/components/ui/ButtonCount.svelte";
  import { derived, writable, type Writable } from "svelte/store";
  import type { ButtonList } from "$lib/models/Point-Hansuu/types.js";

  export let han: number;
  export let fu: number;

  const itemsStores: Writable<ButtonList[]>[] = [
    writable([
      { label: "立直", value: 1, isSelected: false },
      { label: "一発", value: 1, isSelected: false },
      { label: "門前清自摸和", value: 1, isSelected: false },
      { label: "白", value: 1, isSelected: false },
      { label: "發", value: 1, isSelected: false },
      { label: "中", value: 1, isSelected: false },
      { label: "自風牌", value: 1, isSelected: false },
      { label: "場風牌", value: 1, isSelected: false },
      { label: "断幺九", value: 1, isSelected: false },
      { label: "平和", value: 1, isSelected: false },
      { label: "一盃口", value: 1, isSelected: false },
      { label: "海底摸月", value: 1, isSelected: false },
      { label: "河底撈魚", value: 1, isSelected: false },
      { label: "嶺上開花", value: 1, isSelected: false },
      { label: "槍槓", value: 1, isSelected: false },
      { label: "ドラ", value: 1, isSelected: false, isCount: true, count: 0 },
    ]),
    writable([
      { label: "ダブル立直", value: 2, isSelected: false },
      { label: "三色同順", value: 2, isSelected: false },
      { label: "三色同刻", value: 2, isSelected: false },
      { label: "三暗刻", value: 2, isSelected: false },
      { label: "一気通貫", value: 2, isSelected: false },
      { label: "七対子", value: 2, isSelected: false },
      { label: "対々和", value: 2, isSelected: false },
      { label: "混全帯么九", value: 2, isSelected: false },
      { label: "三槓子", value: 2, isSelected: false },
      { label: "小三元", value: 2, isSelected: false },
      { label: "混老頭", value: 2, isSelected: false },
    ]),
    writable([
      { label: "二盃口", value: 3, isSelected: false },
      { label: "純全帯么九", value: 3, isSelected: false },
      { label: "混一色", value: 3, isSelected: false },
    ]),
    writable([{ label: "清一色", value: 6, isSelected: false }]),
    writable([
      { label: "天和", value: 13, isSelected: false },
      { label: "地和", value: 13, isSelected: false },
      { label: "人和", value: 13, isSelected: false },
      { label: "四暗刻", value: 13, isSelected: false },
      { label: "国士無双", value: 13, isSelected: false },
      { label: "九蓮宝燈", value: 13, isSelected: false },
      { label: "大三元", value: 13, isSelected: false },
      { label: "緑一色", value: 13, isSelected: false },
      { label: "字一色", value: 13, isSelected: false },
      { label: "清老頭", value: 13, isSelected: false },
      { label: "四槓子", value: 13, isSelected: false },
      { label: "小四喜", value: 13, isSelected: false },
    ]),
    writable([
      { label: "四暗刻単騎", value: 26, isSelected: false },
      { label: "大四喜", value: 26, isSelected: false },
      { label: "純正九蓮宝燈", value: 26, isSelected: false },
      { label: "国士無双十三面待ち", value: 26, isSelected: false },
    ]),
  ];

  // 配列を6個ずつのグループに分割する関数
  function chunkArray(arr: ButtonList[], size: number): ButtonList[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }

  const titles = ["１翻役", "２翻役", "３翻役", "６翻役", "役満", "ダブル役満"];

  const itemsGroup = derived(itemsStores, ($itemsStores) =>
    $itemsStores.map((items, index) => ({
      title: titles[index],
      itemRows: chunkArray(items, 6),
      store: itemsStores[index],
    })),
  );

  const onButton = (store: Writable<ButtonList[]>, index: number) => {
    store.update((items: ButtonList[]) => {
      const isClick = !items[index].isSelected;
      items[index].isSelected = isClick;
      han += isClick ? items[index].value : -items[index].value;
      return items;
    });
  };

  const countButton = (store: Writable<ButtonList[]>, index: number) => {
    const maxCount: number = 13;
    store.update((items: ButtonList[]) => {
      const item = items[index];
      item.count = (item.count || 0) + 1;
      han += item.value;
      item.isSelected = true;
      if ((item.count || 0) > maxCount) {
        item.count = 0;
        han -= maxCount + 1;
        items[index].isSelected = false;
      }
      return items;
    });
  };

  export function resetItemsStores() {
    itemsStores.forEach((store) => {
      store.update((items) =>
        items.map((item) => ({ ...item, isSelected: false, count: 0 })),
      );
    });
  }
</script>

<div class="flex justify-center">
  <div>
    {#each $itemsGroup as group}
      <div class="font-bold">{group.title}</div>
      {#each group.itemRows as row, rowIndex}
        <div class="flex flex-wrap gap-2 py-1">
          {#each row as item, colIndex}
            {@const index = rowIndex * 6 + colIndex}
            {#if item.isCount}
              <ButtonCount
                count="{item.count || 0}"
                isSelected="{item.isSelected}"
                on:click="{() => countButton(group.store, index)}"
              >
                {item.label}
              </ButtonCount>
            {:else}
              <Button
                isSelected="{item.isSelected}"
                on:click="{() => onButton(group.store, index)}"
              >
                {item.label}
              </Button>
            {/if}
          {/each}
        </div>
      {/each}
    {/each}
  </div>
</div>
