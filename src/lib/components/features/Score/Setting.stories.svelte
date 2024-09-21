<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Setting from "./Setting.svelte";

  export const meta: Meta<Setting> = {
    title: "features/Score/Setting",
    component: Setting,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  let test: number = 0;
</script>

<Story name="Default">
  <Setting bind:test />
  {test}
</Story>
