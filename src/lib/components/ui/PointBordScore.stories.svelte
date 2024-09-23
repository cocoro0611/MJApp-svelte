<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointBordScore from "./PointBordScore.svelte";

  export const meta: Meta<PointBordScore> = {
    title: "UI/PointBordScore",
    component: PointBordScore,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  import type { PointData } from "$lib/models/interface.js";
  let pointData: PointData = {
    oyaRonPoint: 1500,
    oyaTumoPoint: 500,
    koRonPoint: 1000,
    koTumoPoint_oya: 500,
    koTumoPoint_ko: 300,
  };
</script>

<Story name="Default">
  <PointBordScore bind:pointData />
</Story>
