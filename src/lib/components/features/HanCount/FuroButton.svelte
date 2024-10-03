<script lang="ts">
  import ButtonSelect from "$lib/components/ui/ButtonSelect.svelte";
  import { derived, writable, type Writable } from "svelte/store";
  import type { CountButtonList } from "$lib/models/Count/type.js";

  export let han: number;
  export let fu: number;

  const itemsStores: Writable<CountButtonList[]>[] = [
    writable([
      { label: "白", value: 1, isSelected: false },
      { label: "發", value: 1, isSelected: false },
      { label: "中", value: 1, isSelected: false },
      { label: "自風牌", value: 1, isSelected: false },
      { label: "場風牌", value: 1, isSelected: false },
      { label: "断幺九", value: 1, isSelected: false },
      { label: "海底摸月", value: 1, isSelected: false },
      { label: "河底撈魚", value: 1, isSelected: false },
      { label: "嶺上開花", value: 1, isSelected: false },
      { label: "槍槓", value: 1, isSelected: false },
      { label: "三色同順", value: 1, isSelected: false },
      { label: "一気通貫", value: 1, isSelected: false },
      { label: "混全帯么九", value: 1, isSelected: false },
      { label: "ドラ", value: 1, isSelected: false, isCount: true, count: 0 },
    ]),
    writable([
      { label: "三色同刻", value: 2, isSelected: false },
      { label: "三暗刻", value: 2, isSelected: false },
      { label: "対々和", value: 2, isSelected: false },
      { label: "三槓子", value: 2, isSelected: false },
      { label: "小三元", value: 2, isSelected: false },
      { label: "混老頭", value: 2, isSelected: false },
      { label: "純全帯么九", value: 2, isSelected: false },
      { label: "混一色", value: 2, isSelected: false },
    ]),
    writable([{ label: "清一色", value: 5, isSelected: false }]),
    writable([
      { label: "大三元", value: 13, isSelected: false },
      { label: "緑一色", value: 13, isSelected: false },
      { label: "字一色", value: 13, isSelected: false },
      { label: "清老頭", value: 13, isSelected: false },
      { label: "四槓子", value: 13, isSelected: false },
      { label: "小四喜", value: 13, isSelected: false },
    ]),
    writable([{ label: "大四喜", value: 26, isSelected: false }]),
  ];

  const titles = ["１翻役", "２翻役", "５翻役", "役満", "ダブル役満"];

  const itemsGroup = derived(itemsStores, ($itemsStores) =>
    $itemsStores.map((items, index) => ({
      title: titles[index],
      items: items,
      store: itemsStores[index],
    }))
  );

  const onButton = (store: Writable<CountButtonList[]>, index: number) => {
    store.update((items: CountButtonList[]) => {
      const isClick = !items[index].isSelected;
      items[index].isSelected = isClick;
      han += isClick ? items[index].value : -items[index].value;
      return items;
    });
  };

  const countButton = (store: Writable<CountButtonList[]>, index: number) => {
    const maxCount: number = 13;
    store.update((items: CountButtonList[]) => {
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
        items.map((item) => ({ ...item, isSelected: false, count: 0 }))
      );
    });
  }
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {#each $itemsGroup as group}
    <div class="mb-2">
      <h2 class="text-lg font-bold mb-2">{group.title}</h2>
      <div class="grid grid-cols-6 md:grid-cols-12 gap-2">
        {#each group.items as item, index}
          {#if item.isCount}
            <ButtonSelect
              count="{item.count || 0}"
              isSelected="{item.isSelected}"
              on:click="{() => countButton(group.store, index)}"
            >
              {item.label}
            </ButtonSelect>
          {:else}
            <ButtonSelect
              isSelected="{item.isSelected}"
              on:click="{() => onButton(group.store, index)}"
            >
              {item.label}
            </ButtonSelect>
          {/if}
        {/each}
      </div>
    </div>
  {/each}
</div>
