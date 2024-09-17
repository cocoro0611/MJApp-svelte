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

<div class="fixed top-0 left-0 right-0 z-20 bg-blue-800 shadow-lg">
  <PointHeader {type} bind:isFuro on:click on:change />
</div>

<div class="fixed top-[5.5rem] left-0 right-0 z-10">
  <PointBordSelect {type} bind:fu bind:han bind:fuUp />
  <PointBordScore bind:pointData />
</div>

<div class="mt-[6rem]"></div>
