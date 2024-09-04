<script lang="ts">
  import Button2 from "$lib/components/ui/Button2.svelte";
  import ButtonCount from "$lib/components/ui/ButtonCount.svelte";
  import { writable, derived, type Writable } from "svelte/store";

  export let han: number;
  export let fu: number;

  interface ButtonList {
    label: string;
    fuVal: number;
    isSelected: boolean;
    isCount?: boolean;
    count?: number;
  }

  const items1: Writable<ButtonList[]> = writable([
    {
      label: "門前ロン",
      fuVal: 30,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "ツモ",
      fuVal: 22,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "七対子",
      fuVal: 25,
      isSelected: false,
      isCount: true,
      count: 1,
    },
  ]);

  const items2: Writable<ButtonList[]> = writable([
    {
      label: "明刻",
      fuVal: 2,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "暗刻",
      fuVal: 4,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "明槓",
      fuVal: 8,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "暗槓",
      fuVal: 16,
      isSelected: false,
      isCount: true,
      count: 0,
    },
  ]);

  const items3: Writable<ButtonList[]> = writable([
    {
      label: "明刻",
      fuVal: 4,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "暗刻",
      fuVal: 8,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "明槓",
      fuVal: 16,
      isSelected: false,
      isCount: true,
      count: 0,
    },
    {
      label: "暗槓",
      fuVal: 32,
      isSelected: false,
      isCount: true,
      count: 0,
    },
  ]);

  const items4: Writable<ButtonList[]> = writable([
    { label: "役牌", fuVal: 2, isSelected: false },
    { label: "連風牌", fuVal: 4, isSelected: false },
  ]);

  const items5: Writable<ButtonList[]> = writable([
    { label: "単騎", fuVal: 2, isSelected: false },
    { label: "辺張", fuVal: 2, isSelected: false },
    { label: "間張", fuVal: 2, isSelected: false },
    { label: "延べ単", fuVal: 2, isSelected: false },
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
      {
        title: "和了 + 翻数（４翻以下）",
        itemRows: chunkArray($items1, 4),
        store: items1,
      },
      {
        title: "面子（２-８）",
        itemRows: chunkArray($items2, 4),
        store: items2,
      },
      {
        title: "面子（１, ９, 字牌）",
        itemRows: chunkArray($items3, 4),
        store: items3,
      },
      { title: "雀頭", itemRows: chunkArray($items4, 4), store: items4 },
      { title: "待ち", itemRows: chunkArray($items5, 4), store: items5 },
    ],
  );

  const onButton = (store: Writable<ButtonList[]>, index: number) => {
    store.update((items: ButtonList[]) => {
      const isClick = !items[index].isSelected;
      items[index].isSelected = isClick;
      fu += isClick ? items[index].fuVal : -items[index].fuVal;
      return items;
    });
  };

  const countButton = (store: Writable<ButtonList[]>, index: number) => {
    let maxCount: number = 4;
    store.update((items: ButtonList[]) => {
      items[index].count += 1;
      if (items[index].fuVal === 25) {
        han = items[index].count;
        fu = items[index].fuVal;
      } else if (items[index].fuVal === 22 || items[index].fuVal === 30) {
        han = items[index].count;
        fu = items[index].fuVal;
      } else {
        fu += items[index].fuVal;
      }
      items[index].isSelected = true;
      if (items[index].count > maxCount) {
        if (items[index].fuVal === 25) {
          items[index].count = 1;
        } else {
          items[index].count = 0;
        }
        han = 0;
        fu = 20;
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
                count="{item.count}"
                isSelected="{item.isSelected}"
                on:click="{() => countButton(group.store, index)}"
              >
                <svelte:fragment slot="countName">
                  {group.title === "和了 + 翻数（４翻以下）" ? "翻" : "つ"}
                </svelte:fragment>
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
