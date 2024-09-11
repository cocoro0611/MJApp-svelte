<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
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
      { label: "ツモ", fuVal: 22, isSelected: false, isCount: true, count: 0 },
      {
        label: "七対子",
        fuVal: 25,
        isSelected: false,
        isCount: true,
        count: 1,
      },
      {
        label: "平和ツモ",
        fuVal: 20,
        isSelected: false,
        isCount: true,
        count: 1,
      },
    ]),
    writable([
      { label: "明刻", fuVal: 2, isSelected: false, isCount: true, count: 0 },
      { label: "暗刻", fuVal: 4, isSelected: false, isCount: true, count: 0 },
      { label: "明槓", fuVal: 8, isSelected: false, isCount: true, count: 0 },
      { label: "暗槓", fuVal: 16, isSelected: false, isCount: true, count: 0 },
    ]),
    writable([
      { label: "明刻", fuVal: 4, isSelected: false, isCount: true, count: 0 },
      { label: "暗刻", fuVal: 8, isSelected: false, isCount: true, count: 0 },
      { label: "明槓", fuVal: 16, isSelected: false, isCount: true, count: 0 },
      { label: "暗槓", fuVal: 32, isSelected: false, isCount: true, count: 0 },
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

  const isInitialCategorySelected = derived(itemsStores[0], ($items) =>
    $items.some(
      (item) =>
        (item.label === "門前ロン" || item.label === "ツモ") && item.isSelected,
    ),
  );

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
      items: items,
      store: itemsStores[index],
    })),
  );

  const onButton = (
    store: Writable<ButtonList[]>,
    index: number,
    categoryIndex: number,
  ) => {
    store.update((items: ButtonList[]) => {
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
      if (categoryIndex === 0) {
        items.forEach((item, i) => {
          if (i !== index) {
            item.count =
              item.label === "七対子" || item.label === "平和ツモ" ? 1 : 0;
            item.isSelected = false;
          }
        });
        resetItemsStores();
      }
      const item = items[index];
      item.count = (item.count || 0) + 1;
      if (categoryIndex === 0) {
        han = item.count || 0;
        fu = item.fuVal;
        item.isSelected = true;
        if ((item.count || 0) > maxCount) {
          item.count =
            item.label === "七対子" || item.label === "平和ツモ" ? 1 : 0;
          han = 0;
          fu = 30;
          item.isSelected = false;
        }
      } else {
        fu += item.fuVal;
        item.isSelected = true;
        if ((item.count || 0) > maxCount) {
          item.count =
            item.label === "七対子" || item.label === "平和ツモ" ? 1 : 0;
          fu -= 5 * item.fuVal;
          item.isSelected = false;
        }
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

<div class="flex flex-col items-center">
  {#each $itemsGroup as group, categoryIndex}
    {#if categoryIndex === 0 || $isInitialCategorySelected}
      <div class="w-full max-w-4xl">
        <div class="font-bold pt-4 pb-2 ml-[5rem]">{group.title}</div>
        <div class="flex flex-wrap justify-center gap-2">
          {#each group.items as item, index}
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
              <Button
                isSelected="{item.isSelected}"
                on:click="{() => onButton(group.store, index, categoryIndex)}"
              >
                {item.label}
              </Button>
            {/if}
          {/each}
        </div>
      </div>
    {/if}
  {/each}
</div>
