<script lang="ts">
  import type { RoomData } from "$lib/models/Room/type.js";
  import Button from "$lib/components/ui/Button.svelte";
  import { derived, writable, type Writable } from "svelte/store";

  export let room: Omit<RoomData, "users">;

  type ScoreButtonList = {
    label: string;
    isSelected: boolean;
    [key: string]: any;
  };

  type RoomKey = keyof Pick<
    RoomData,
    "initialPoint" | "returnPoint" | "bonusPoint" | "scoreRate" | "chipRate"
  >;

  interface GroupConfig {
    title: string;
    property: RoomKey;
    options: ScoreButtonList[];
    format: (value: any) => string;
  }

  const groupConfigs: GroupConfig[] = [
    {
      title: "持ち点",
      property: "initialPoint",
      options: [
        {
          label: "25000点",
          initialPoint: 25000,
          isSelected: room.initialPoint === 25000,
        },
        {
          label: "30000点",
          initialPoint: 30000,
          isSelected: room.initialPoint === 30000,
        },
        {
          label: "35000点",
          initialPoint: 35000,
          isSelected: room.initialPoint === 35000,
        },
        {
          label: "40000点",
          initialPoint: 40000,
          isSelected: room.initialPoint === 40000,
        },
      ],
      format: (value: number) => `${value} 点`,
    },
    {
      title: "返し点",
      property: "returnPoint",
      options: [
        {
          label: "30000点",
          returnPoint: 30000,
          isSelected: room.returnPoint === 30000,
        },
        {
          label: "35000点",
          returnPoint: 35000,
          isSelected: room.returnPoint === 35000,
        },
        {
          label: "40000点",
          returnPoint: 40000,
          isSelected: room.returnPoint === 40000,
        },
        {
          label: "45000点",
          returnPoint: 45000,
          isSelected: room.returnPoint === 45000,
        },
      ],
      format: (value: number) => `${value} 点`,
    },
    {
      title: "ウマ",
      property: "bonusPoint",
      options: [
        {
          label: "なし",
          bonusPoint: "00-00",
          isSelected: room.bonusPoint === "なし",
        },
        {
          label: "5 - 10",
          bonusPoint: "05-10",
          isSelected: room.bonusPoint === "05-10",
        },
        {
          label: "10 - 20",
          bonusPoint: "10-20",
          isSelected: room.bonusPoint === "10-20",
        },
        {
          label: "10 - 30",
          bonusPoint: "10-30",
          isSelected: room.bonusPoint === "10-30",
        },
      ],
      format: (value: string) => (value === "00-00" ? "なし" : value),
    },
    {
      title: "レート",
      property: "scoreRate",
      options: [
        { label: "なし", scoreRate: 0, isSelected: room.scoreRate === 0 },
        { label: "テンイチ", scoreRate: 10, isSelected: room.scoreRate === 10 },
        { label: "テンニ", scoreRate: 20, isSelected: room.scoreRate === 20 },
        { label: "テンサン", scoreRate: 30, isSelected: room.scoreRate === 30 },
        { label: "テンゴ", scoreRate: 50, isSelected: room.scoreRate === 50 },
        {
          label: "テンピン",
          scoreRate: 100,
          isSelected: room.scoreRate === 100,
        },
      ],
      format: (value: number) => {
        const rateMap: { [key: number]: string } = {
          0: "なし",
          10: "テンイチ",
          20: "テンニ",
          30: "テンサン",
          50: "テンゴ",
          100: "テンピン",
        };
        return rateMap[value] || "カスタム";
      },
    },
    {
      title: "チップ",
      property: "chipRate",
      options: [
        { label: "なし", chipRate: 0, isSelected: room.chipRate === 0 },
        { label: "100P", chipRate: 100, isSelected: room.chipRate === 100 },
        { label: "200P", chipRate: 200, isSelected: room.chipRate === 200 },
        { label: "300P", chipRate: 300, isSelected: room.chipRate === 300 },
        { label: "400P", chipRate: 400, isSelected: room.chipRate === 400 },
        { label: "500P", chipRate: 500, isSelected: room.chipRate === 500 },
      ],
      format: (value: number) => (value === 0 ? "なし" : `${value} P`),
    },
  ];

  const itemsStores: Writable<ScoreButtonList[]>[] = groupConfigs.map(
    (config) => writable(config.options)
  );

  function chunkArray(
    arr: ScoreButtonList[],
    size: number
  ): ScoreButtonList[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

  const itemsGroup = derived(itemsStores, ($itemsStores) =>
    $itemsStores.map((items, index) => ({
      ...groupConfigs[index],
      itemRows: chunkArray(items, 2),
      store: itemsStores[index],
    }))
  );

  const onButton = (
    store: Writable<ScoreButtonList[]>,
    index: number,
    property: RoomKey
  ) => {
    store.update((items: ScoreButtonList[]) => {
      items.forEach((item, i) => {
        item.isSelected = i === index;
      });
      const selectedItem = items[index];
      const value = selectedItem[property];
      if (value !== undefined) {
        (room[property] as RoomData[RoomKey]) = value as RoomData[RoomKey];
      }
      return items;
    });
  };
</script>

<input type="hidden" name="initialPoint" value="{room.initialPoint}" />
<input type="hidden" name="returnPoint" value="{room.returnPoint}" />
<input type="hidden" name="bonusPoint" value="{room.bonusPoint}" />
<input type="hidden" name="scoreRate" value="{room.scoreRate}" />
<input type="hidden" name="chipRate" value="{room.chipRate}" />

{#each $itemsGroup as group}
  <div class="flex justify-between font-bold pt-4">
    <div>
      <span class="mr-2">{group.title}</span>
      <span class="text-blue-500">{group.format(room[group.property])}</span>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="grid grid-cols-2 md:grid-cols-6 gap-2 py-1">
      {#each group.options as item, index}
        <Button
          isWide
          isSelected="{item.isSelected}"
          on:click="{() => onButton(group.store, index, group.property)}"
        >
          {item.label}
        </Button>
      {/each}
    </div>
  </div>
{/each}
