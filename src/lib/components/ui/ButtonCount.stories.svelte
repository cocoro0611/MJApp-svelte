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

  const countButton = () => {
    count += 1;
    isSelected = true;
    if (count > maxCount) {
      count = 0;
      isSelected = false;
    }
  };
</script>

<Story name="Default">
  <ButtonCount bind:count bind:isSelected on:click="{countButton}">
    <svelte:fragment slot="countName">翻</svelte:fragment>
    ドラ
  </ButtonCount>
  <ul>
    <li>isSelected：{isSelected}</li>
    <li>count：{count}</li>
  </ul>
</Story>
