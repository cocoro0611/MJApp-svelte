<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Button from "./Button.svelte";

  export const meta: Meta<Button> = {
    title: "UI/Button",
    component: Button,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";

  let han = 0;
</script>

<Story name="Default">
  <div>翻: {han}</div>

  <Button bind:han value="{1}">1翻</Button>
  <Button bind:han value="{2}">2翻</Button>
  <Button bind:han value="{3}">3翻</Button>

  <div>合計翻数: {han}</div>
</Story>
