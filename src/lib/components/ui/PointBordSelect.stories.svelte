<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointBordSelect from "./PointBordSelect.svelte";

  export const meta: Meta<PointBordSelect> = {
    title: "UI/PointBordSelect",
    component: PointBordSelect,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let fu: number = 30;
  let fuUp: number = 30;
  let han: number = 4;
</script>

<Story name="Default">
  <PointBordSelect bind:fu bind:han type="han" />
</Story>

<Story name="Fusuu">
  <PointBordSelect bind:fu bind:han bind:fuUp type="fu" />
</Story>
