<script lang="ts">
  import PointHeader from "./PointHeader.svelte";
  import PointBordSelect from "./PointBordSelect.svelte";
  import PointBordScore from "./PointBordScore.svelte";

  import type { PointData } from "$lib/models/types.js";

  export let type: "han" | "fu";
  export let han: number;
  export let fu: number;
  export let fuUp: number = 30;
  export let pointData: PointData;
  export let isFuro: boolean = false;
</script>

<div class="fixed top-16 left-0 right-0 z-10">
  <PointHeader {type} bind:isFuro on:click on:change />

  <PointBordSelect {type} bind:fu bind:han bind:fuUp />

  <PointBordScore bind:pointData />
</div>

<div class="mt-[8rem]"></div>
