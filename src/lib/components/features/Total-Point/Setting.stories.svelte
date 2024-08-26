<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Setting from "./Setting.svelte";

  export const meta: Meta<Setting> = {
    title: "features/Total-Point/Setting",
    component: Setting,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Setting />
</Story>
