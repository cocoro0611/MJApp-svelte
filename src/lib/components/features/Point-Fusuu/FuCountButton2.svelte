<script lang="ts">
  import Button2 from "$lib/components/ui/Button2.svelte";
  import ButtonCount from "$lib/components/ui/ButtonCount.svelte";
  import { derived, writable, type Writable } from "svelte/store";
  import type { ButtonList } from "$lib/models/Point-Fusuu/types.js";

  export let han: number;
  export let fu: number;

  const itemsStores: Writable<ButtonList[]>[] = [
    writable([
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
    ]),
    writable([
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
    ]),
    writable([
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
    ]),
    writable([
      { label: "役牌", fuVal: 2, isSelected: false },
      { label: "連風牌", fuVal: 4, isSelected: false },
    ]),
    writable([
      { label: "単騎", fuVal: 2, isSelected: false },
      { label: "辺張", fuVal: 2, isSelected: false },
      { label: "間張", fuVal: 2, isSelected: false },
      { label: "延べ単", fuVal: 2, isSelected: false },
    ]),
  ];

  // 配列を6個ずつのグループに分割する関数
  function chunkArray(arr: ButtonList[], size: number): ButtonList[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }

  const titles = [
    "和了 + 翻数（４翻以下）",
    "面子（２-８）",
    "面子（１, ９, 字牌）",
    "雀頭",
    "待ち",
  ];

  const itemsGroup = derived(itemsStores, ($itemsStores) =>
    $itemsStores.map((items, index) => ({
      title: titles[index],
      itemRows: chunkArray(items, 6),
      store: itemsStores[index],
    })),
  );

  const onButton = (
    store: Writable<ButtonList[]>,
    index: number,
    categoryIndex: number,
  ) => {
    store.update((items: ButtonList[]) => {
      // 雀頭または待ちの排他処理
      if (categoryIndex === 3 || categoryIndex === 4) {
        items.forEach((item, i) => {
          if (i !== index) {
            if (item.isSelected) {
              fu -= item.fuVal;
            }
            item.isSelected = false;
          }
        });
      }
      const isClick = !items[index].isSelected;
      items[index].isSelected = isClick;
      fu += isClick ? items[index].fuVal : -items[index].fuVal;
      return items;
    });
  };

  const countButton = (
    store: Writable<ButtonList[]>,
    index: number,
    categoryIndex: number,
  ) => {
    const maxCount: number = 4;
    store.update((items) => {
      // 和了の排他的処理
      if (categoryIndex === 0) {
        items.forEach((item, i) => {
          if (i !== index) {
            item.count = item.fuVal === 25 ? 1 : 0;
            item.isSelected = false;
          }
        });
        // 他のカテゴリーのリセット
        itemsStores.forEach((otherStore, otherCategoryIndex) => {
          if (otherCategoryIndex !== 0) {
            otherStore.update((otherItems) =>
              otherItems.map((item) => ({
                ...item,
                count: 0,
                isSelected: false,
              })),
            );
          }
        });
      }
      const item = items[index];
      item.count = (item.count || 0) + 1;
      if (item.fuVal === 25 || item.fuVal === 22 || item.fuVal === 30) {
        han = item.count || 0;
        fu = item.fuVal;
      } else {
        fu += item.fuVal;
      }
      item.isSelected = true;
      if ((item.count || 0) > maxCount) {
        item.count = item.fuVal === 25 ? 1 : 0;
        han = 0;
        fu = 20;
        item.isSelected = false;
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
    {#each $itemsGroup as group, categoryIndex}
      <div class="font-bold">{group.title}</div>
      {#each group.itemRows as row, rowIndex}
        <div class="flex flex-wrap gap-2 py-1">
          {#each row as item, colIndex}
            {@const index = rowIndex * 6 + colIndex}
            {#if item.isCount}
              <ButtonCount
                count="{item.count || 0}"
                isSelected="{item.isSelected}"
                on:click="{() =>
                  countButton(group.store, index, categoryIndex)}"
              >
                <svelte:fragment slot="countName">
                  {group.title === "和了 + 翻数（４翻以下）" ? "翻" : "つ"}
                </svelte:fragment>
                {item.label}
              </ButtonCount>
            {:else}
              <Button2
                isSelected="{item.isSelected}"
                on:click="{() => onButton(group.store, index, categoryIndex)}"
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
