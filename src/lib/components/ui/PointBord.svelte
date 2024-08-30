<script lang="ts">
  import PointHeader2 from "./PointHeader2.svelte";
  import PointBordSelect from "./PointBordSelect.svelte";
  import PointBordScore from "./PointBordScore.svelte";

  import type { PointData } from "$lib/models/types.js";

  export let type: "han" | "fu";
  export let han: number;
  export let fu: number;
  export let pointData: PointData;
  export let isChecked: boolean;

  let isFuro: boolean;

  const clearValue = () => {
    han = 0;
    fu = 30;
    isChecked = false;
  };

  const onToggle = () => {
    isFuro = !isFuro;
    clearValue();
  };
</script>

<PointHeader2
  bind:isFuro
  on:click="{clearValue}"
  on:change="{onToggle}"
  {type}
/>

<PointBordSelect bind:fu bind:han />

<PointBordScore bind:pointData />
