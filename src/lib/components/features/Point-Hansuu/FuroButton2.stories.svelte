<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import FuroButton2 from "./FuroButton2.svelte";

  export const meta: Meta<FuroButton2> = {
    title: "features/Point-Hansuu/FuroButton2",
    component: FuroButton2,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let han: number = 0;
  let count: number = 0;
</script>

<Story name="Default">
  <FuroButton2 bind:han bind:count />
  <div>TotalHan：{han}</div>
  <div>count：{count}</div>
</Story>
