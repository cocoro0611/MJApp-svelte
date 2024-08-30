<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointBord from "./PointBord.svelte";

  export const meta: Meta<PointBord> = {
    title: "UI/PointBord",
    component: PointBord,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { PointData } from "$lib/models/types.js";

  let han: number = 2;
  let fu: number = 50;
  let pointData: PointData = {
    oyaRon: 1500,
    oyaTumo: 500,
    koRon: 1000,
    koTumo_oya: 500,
    koTumo_ko: 300,
  };

  let isChecked: boolean = true;
</script>

<Story name="Default">
  <PointBord type="han" bind:han bind:fu bind:pointData bind:isChecked />
  <div>
    <span>ボタンの状態：</span>
    {isChecked}
  </div>
</Story>

<Story name="NotToggle">
  <PointBord type="fu" bind:han bind:fu bind:pointData bind:isChecked />
  <div>
    <span>ボタンの状態：</span>
    {isChecked}
  </div>
</Story>
