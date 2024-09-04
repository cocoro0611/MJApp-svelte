<script lang="ts">
  import PointHeader2 from "./PointHeader2.svelte";
  import PointBordSelect from "./PointBordSelect.svelte";
  import PointBordScore from "./PointBordScore.svelte";

  import type { PointData } from "$lib/models/types.js";

  export let type: "han" | "fu";
  export let han: number;
  export let fu: number;
  export let pointData: PointData;
  export let isFuro: boolean;
</script>

<div class="pb-4">
  <PointHeader2 {type} bind:isFuro on:click on:change />

  <PointBordSelect bind:fu bind:han />

  <PointBordScore bind:pointData />
</div>
