<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ButtonToggle from "./ButtonToggle.svelte";

  export const meta: Meta<ButtonToggle> = {
    title: "UI/ButtonToggle",
    component: ButtonToggle,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let isFuro: boolean = true;

  const onToggle = (event: CustomEvent<boolean>) => {
    isFuro = event.detail;
  };
</script>

<Story name="Default">
  <div class="bg-blue-800 p-10">
    <ButtonToggle bind:isFuro on:toggle="{onToggle}" />
  </div>
</Story>
