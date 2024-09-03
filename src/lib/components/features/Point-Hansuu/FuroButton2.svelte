<script lang="ts">
  import Button2 from "$lib/components/ui/Button2.svelte";
  import ButtonCount from "$lib/components/ui/ButtonCount.svelte";
  import { writable, derived, type Writable } from "svelte/store";

  export let han: number;
  export let count: number;

  interface ButtonList {
    label: string;
    value: number;
    isSelected: boolean;
    isCount?: boolean;
  }

  const items1: Writable<ButtonList[]> = writable([
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
    { label: "ドラ", value: 1, isSelected: false, isCount: true },
  ]);

  const items2: Writable<ButtonList[]> = writable([
    { label: "三色同刻", value: 2, isSelected: false },
    { label: "三暗刻", value: 2, isSelected: false },
    { label: "対々和", value: 2, isSelected: false },
    { label: "三槓子", value: 2, isSelected: false },
    { label: "小三元", value: 2, isSelected: false },
    { label: "混老頭", value: 2, isSelected: false },
    { label: "純全帯么九", value: 2, isSelected: false },
    { label: "混一色", value: 2, isSelected: false },
  ]);

  const items3: Writable<ButtonList[]> = writable([
    { label: "清一色", value: 5, isSelected: false },
  ]);

  const items4: Writable<ButtonList[]> = writable([
    { label: "大三元", value: 13, isSelected: false },
    { label: "緑一色", value: 13, isSelected: false },
    { label: "字一色", value: 13, isSelected: false },
    { label: "清老頭", value: 13, isSelected: false },
    { label: "四槓子", value: 13, isSelected: false },
    { label: "小四喜", value: 13, isSelected: false },
  ]);

  const items5: Writable<ButtonList[]> = writable([
    { label: "大四喜", value: 26, isSelected: false },
  ]);

  // 配列を6個ずつのグループに分割する関数
  function chunkArray(arr: ButtonList[], size: number): ButtonList[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }

  const itemsGroup = derived(
    [items1, items2, items3, items4, items5],
    ([$items1, $items2, $items3, $items4, $items5]) => [
      { title: "１翻役", itemRows: chunkArray($items1, 6), store: items1 },
      { title: "２翻役", itemRows: chunkArray($items2, 6), store: items2 },
      { title: "５翻役", itemRows: chunkArray($items3, 6), store: items3 },
      { title: "役満", itemRows: chunkArray($items4, 6), store: items4 },
      { title: "ダブル役満", itemRows: chunkArray($items5, 6), store: items5 },
    ],
  );

  const onButton = (store: Writable<ButtonList[]>, index: number) => {
    store.update((items: ButtonList[]) => {
      const isClick = !items[index].isSelected;
      items[index].isSelected = isClick;
      han += isClick ? items[index].value : -items[index].value;
      return items;
    });
  };

  const maxCount: number = 13;
  const countButton = (store: Writable<ButtonList[]>, index: number) => {
    store.update((items: ButtonList[]) => {
      count += 1;
      han += items[index].value;
      items[index].isSelected = true;
      if (count > maxCount) {
        count = 0;
        han = 0;
        items[index].isSelected = false;
      }
      return items;
    });
  };
</script>

<div class="flex justify-center">
  <div>
    {#each $itemsGroup as group}
      <div class="font-bold">{group.title}</div>
      {#each group.itemRows as row, rowIndex}
        <div class="flex flex-wrap gap-2 py-1">
          {#each row as item, colIndex}
            {@const index = rowIndex * 6 + colIndex}
            {#if item.isCount === true}
              <ButtonCount
                bind:count
                isSelected="{item.isSelected}"
                on:click="{() => countButton(group.store, index)}"
              >
                {item.label}
              </ButtonCount>
            {:else}
              <Button2
                isSelected="{item.isSelected}"
                on:click="{() => onButton(group.store, index)}"
              >
                {item.label}
              </Button2>
            {/if}
          {/each}
        </div>
      {/each}
    {/each}
  </div>
</div>
