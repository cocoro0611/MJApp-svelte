<script lang="ts">
  import FormField from "../layout/FormField.svelte";
  import ButtonSelect from "$lib/components/ui/ButtonSelect.svelte";
  import type { RoomData } from "$lib/models/Room/type.js";

  export let room: Omit<RoomData, "users">;

  type RoomKey = keyof Pick<
    RoomData,
    "initialPoint" | "returnPoint" | "bonusPoint" | "scoreRate" | "chipRate"
  >;

  interface Option {
    label: string;
    value: number | string;
  }

  interface GroupConfig {
    title: string;
    property: RoomKey;
    options: Option[];
    format: (value: any) => string;
  }

  const groupConfigs: GroupConfig[] = [
    {
      title: "持ち点",
      property: "initialPoint",
      options: [25000, 30000, 35000, 40000].map((value) => ({
        label: `${value}点`,
        value,
      })),
      format: (value: number) => `${value} 点`,
    },
    {
      title: "返し点",
      property: "returnPoint",
      options: [30000, 35000, 40000, 45000].map((value) => ({
        label: `${value}点`,
        value,
      })),
      format: (value: number) => `${value} 点`,
    },
    {
      title: "ウマ",
      property: "bonusPoint",
      options: [
        { label: "なし", value: "00-00" },
        { label: "5 - 10", value: "05-10" },
        { label: "10 - 20", value: "10-20" },
        { label: "10 - 30", value: "10-30" },
      ],
      format: (value: string) => (value === "00-00" ? "なし" : value),
    },
    {
      title: "レート",
      property: "scoreRate",
      options: [
        { label: "なし", value: 0 },
        { label: "テンイチ", value: 10 },
        { label: "テンニ", value: 20 },
        { label: "テンサン", value: 30 },
        { label: "テンゴ", value: 50 },
        { label: "テンピン", value: 100 },
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
      options: [0, 100, 200, 300, 400, 500].map((value) => ({
        label: value === 0 ? "なし" : `${value}P`,
        value,
      })),
      format: (value: number) => (value === 0 ? "なし" : `${value} P`),
    },
  ];

  function onSelect(property: RoomKey, value: number | string) {
    (room[property] as string | number) = value;
  }
</script>

{#each groupConfigs as group}
  <FormField name="{group.title}">
    <div class="flex justify-center">
      <div class="gap-2 py-1 grid grid-cols-2 md:grid-cols-6">
        {#each group.options as option}
          <ButtonSelect
            width="long"
            isSelected="{room[group.property] === option.value}"
            on:click="{() => onSelect(group.property, option.value)}"
          >
            {option.label}
          </ButtonSelect>
        {/each}
      </div>
    </div>
  </FormField>
{/each}

{#each groupConfigs as group}
  <input type="hidden" name="{group.property}" value="{room[group.property]}" />
{/each}
