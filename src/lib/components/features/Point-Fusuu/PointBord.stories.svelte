<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointBord from "./PointBord.svelte";

  export const meta: Meta<PointBord> = {
    title: "features/Point-Fusuu/PointBord",
    component: PointBord,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { PointData } from "$lib/models/Point-Fusuu/types.js";

  let fu = 30;
  let han = 1;
  let pointData: PointData = {
    oyaRonPoint: 0,
    oyaTumoPoint: 0,
    koRonPoint: 0,
    koTumoPoint_oya: 0,
    koTumoPoint_ko: 0,
  };
</script>

<Story name="Default">
  <PointBord bind:fu bind:han bind:pointData />
</Story>
