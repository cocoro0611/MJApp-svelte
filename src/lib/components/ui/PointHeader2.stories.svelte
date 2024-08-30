<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointHeader2 from "./PointHeader2.svelte";

  export const meta: Meta<PointHeader2> = {
    title: "UI/PointHeader2",
    component: PointHeader2,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  export let isFuro: boolean;

  let han: number = 2;
  let fu: number = 50;
  let isChecked: boolean = true;

  const clearValue = () => {
    han = 0;
    fu = 30;
    isChecked = false;
  };

  const onToggle = () => {
    isFuro = !isFuro;
    clearValue();
  };
</script>

<Story name="Default">
  <div class="flex py-2">翻数：{han}</div>
  <div class="flex py-2">符数：{fu}</div>
  <div class="flex py-2">ボタンの選択状態（isSelected）：{isChecked}</div>
  <PointHeader2
    bind:isFuro
    on:click="{clearValue}"
    on:change="{onToggle}"
    type="han"
  />
</Story>

<Story name="Fusuu">
  <div class="flex py-2">翻数：{han}</div>
  <div class="flex py-2">符数：{fu}</div>
  <div class="flex py-2">ボタンの選択状態（isSelected）：{isChecked}</div>
  <PointHeader2 bind:isFuro on:click="{clearValue}" type="fu" />
</Story>
