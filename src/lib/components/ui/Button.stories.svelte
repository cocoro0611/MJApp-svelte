<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Button from "./Button.svelte";

  export const meta: Meta<Button> = {
    title: "UI/Button",
    component: Button,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let isSelected: boolean;

  const onButton = () => {
    isSelected = !isSelected;
  };
</script>

<Story name="Default">
  <div>クリックで選択</div>
  <Button bind:isSelected on:click="{onButton}">立直</Button>
  <Button isWide bind:isSelected on:click="{onButton}">30000点</Button>
  <Button isCustom bind:isSelected on:click="{onButton}">カスタム</Button>
</Story>
