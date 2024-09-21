<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
  import ButtonCount from "$lib/components/ui/ButtonCount.svelte";
  import { derived, writable, type Writable } from "svelte/store";
  import type { CountButtonList } from "$lib/models/interface.js";

  export let han: number;
  export let fu: number;

  const itemsStores: Writable<CountButtonList[]>[] = [
    writable([
      {
        label: "門前ロン",
        value: 30,
        isSelected: false,
        isCount: true,
        count: 0,
      },
      { label: "ツモ", value: 22, isSelected: false, isCount: true, count: 0 },
      {
        label: "七対子",
        value: 25,
        isSelected: false,
        isCount: true,
        count: 1,
      },
      {
        label: "平和ツモ",
        value: 20,
        isSelected: false,
        isCount: true,
        count: 1,
      },
    ]),
    writable([
      { label: "明刻", value: 2, isSelected: false, isCount: true, count: 0 },
      { label: "暗刻", value: 4, isSelected: false, isCount: true, count: 0 },
      { label: "明槓", value: 8, isSelected: false, isCount: true, count: 0 },
      { label: "暗槓", value: 16, isSelected: false, isCount: true, count: 0 },
    ]),
    writable([
      { label: "明刻", value: 4, isSelected: false, isCount: true, count: 0 },
      { label: "暗刻", value: 8, isSelected: false, isCount: true, count: 0 },
      { label: "明槓", value: 16, isSelected: false, isCount: true, count: 0 },
      { label: "暗槓", value: 32, isSelected: false, isCount: true, count: 0 },
    ]),
    writable([
      { label: "役牌", value: 2, isSelected: false },
      { label: "連風牌", value: 4, isSelected: false },
    ]),
    writable([
      { label: "単騎", value: 2, isSelected: false },
      { label: "辺張", value: 2, isSelected: false },
      { label: "間張", value: 2, isSelected: false },
      { label: "延べ単", value: 2, isSelected: false },
    ]),
  ];

  const isInitialCategorySelected = derived(itemsStores[0], ($items) =>
    $items.some(
      (item) =>
        (item.label === "門前ロン" || item.label === "ツモ") && item.isSelected,
    ),
  );

  const titles = [
    "和了 + 翻数",
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
    store: Writable<CountButtonList[]>,
    index: number,
    categoryIndex: number,
  ) => {
    store.update((items: CountButtonList[]) => {
      if (categoryIndex === 3 || categoryIndex === 4) {
        items.forEach((item, i) => {
          if (i !== index) {
            if (item.isSelected) {
              fu -= item.value;
            }
            item.isSelected = false;
          }
        });
      }
      const isClick = !items[index].isSelected;
      items[index].isSelected = isClick;
      fu += isClick ? items[index].value : -items[index].value;
      return items;
    });
  };

  const countButton = (
    store: Writable<CountButtonList[]>,
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
        fu = item.value;
        item.isSelected = true;
        if ((item.count || 0) > maxCount) {
          item.count =
            item.label === "七対子" || item.label === "平和ツモ" ? 1 : 0;
          han = 0;
          fu = 30;
          item.isSelected = false;
        }
      } else {
        fu += item.value;
        item.isSelected = true;
        if ((item.count || 0) > maxCount) {
          item.count =
            item.label === "七対子" || item.label === "平和ツモ" ? 1 : 0;
          fu -= 5 * item.value;
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

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {#each $itemsGroup as group, categoryIndex}
    {#if categoryIndex === 0 || $isInitialCategorySelected}
      <div class="mb-2">
        <h2 class="text-lg font-bold mb-2">{group.title}</h2>
        <div class="flex justify-center gap-2">
          {#each group.items as item, index}
            {#if item.isCount}
              <ButtonCount
                count="{item.count || 0}"
                isSelected="{item.isSelected}"
                on:click="{() =>
                  countButton(group.store, index, categoryIndex)}"
              >
                <svelte:fragment slot="countName">
                  {group.title === "和了 + 翻数" ? "翻" : "つ"}
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
