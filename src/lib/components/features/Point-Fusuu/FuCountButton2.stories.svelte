<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import FuCountButton2 from "./FuCountButton2.svelte";

  export const meta: Meta<FuCountButton2> = {
    title: "features/Point-Fusuu/FuCountButton2",
    component: FuCountButton2,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let han: number = 0;
  let fu: number = 20;
  let count: number = 0;
</script>

<Story name="Default">
  <FuCountButton2 bind:han bind:fu />
  <div>TotalHan：{han}</div>
  <div>TotalFu：{fu}</div>
</Story>
