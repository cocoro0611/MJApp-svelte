<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointBord from "./PointBord.svelte";

  export const meta: Meta<PointBord> = {
    title: "features/Point-Hansuu/PointBord",
    component: PointBord,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";

  let fu = 30;
  let han = 1;
  let oyaRonPoint = 1500;
  let oyaTumoPoint = 500;
  let koRonPoint = 1000;
  let koTumoPoint_oya = 500;
  let koTumoPoint_ko = 300;
</script>

<Story name="Default">
  <PointBord
    {fu}
    {han}
    {oyaRonPoint}
    {oyaTumoPoint}
    {koRonPoint}
    {koTumoPoint_oya}
    {koTumoPoint_ko}
  />
</Story>
