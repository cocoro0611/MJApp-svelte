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

  import type { PointData } from "$lib/models/types.js";
  let pointData: PointData = {
    oyaRon: 1500,
    oyaTumo: 500,
    koRon: 1000,
    koTumo_oya: 500,
    koTumo_ko: 300,
  };
</script>

<Story name="Default">
  <PointBordScore bind:pointData />
</Story>
