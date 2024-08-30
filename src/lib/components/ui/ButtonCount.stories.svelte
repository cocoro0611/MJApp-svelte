<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ButtonCount from "./ButtonCount.svelte";

  export const meta: Meta<ButtonCount> = {
    title: "UI/ButtonCount",
    component: ButtonCount,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let isSelected: boolean = false;
  let count: number = 0;
  let maxCount: number = 3;
</script>

<Story name="Default">
  <ButtonCount {maxCount} bind:count bind:isSelected>
    <svelte:fragment slot="countName">翻</svelte:fragment>
    ドラ
  </ButtonCount>
  <ul>
    <li>isSelected：{isSelected}</li>
    <li>count：{count}</li>
  </ul>
</Story>
