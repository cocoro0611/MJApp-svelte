<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";
  import IconButton from "./IconButton.svelte";

  export const meta: Meta<IconButton> = {
    title: "UI/IconButton",
    component: IconButton,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
  import { IconUserMinus } from "@tabler/icons-svelte";
</script>

<Story name="Default">
  <IconButton>
    <IconUserMinus slot="icon" />
    未選択
  </IconButton>
</Story>
