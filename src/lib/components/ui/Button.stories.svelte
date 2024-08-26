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
</script>

<Story name="Default">
  <div class="flex gap-2">
    <Button type="normal">未選択</Button>
    <Button type="normal" isSelected>選択</Button>
  </div>
</Story>

<Story name="longWight">
  <div class="flex gap-2">
    <Button type="wight">未選択</Button>
    <Button type="wight" isSelected>選択</Button>
  </div>
</Story>
