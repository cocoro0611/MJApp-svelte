<script lang="ts">
  import PointHeader2 from "./PointHeader2.svelte";
  import PointBordSelect from "./PointBordSelect.svelte";
  import PointBordScore from "./PointBordScore.svelte";

  import type { PointData } from "$lib/models/types.js";

  export let type: "han" | "fu";
  export let han: number;
  export let fu: number;
  export let count: number;
  export let pointData: PointData;
  export let isChecked: boolean;
  export let isFuro: boolean;

  const clearValue = () => {
    han = 0;
    fu = 30;
    count = 0;
    isChecked = false;
  };

  const onToggle = () => {
    isFuro = !isFuro;
    clearValue();
  };
</script>

<div class="pb-4">
  <PointHeader2
    bind:isFuro
    on:click="{clearValue}"
    on:change="{onToggle}"
    {type}
  />

  <PointBordSelect bind:fu bind:han />

  <PointBordScore bind:pointData />
</div>
