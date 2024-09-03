<!-- <script lang="ts">
  import PointHeader from "$lib/components/ui/PointHeader.svelte";
  import PointBord from "$lib/components/features/Point-Hansuu/PointBord.svelte";
  import MenzenButton from "$lib/components/features/Point-Hansuu/MenzenButton.svelte";
  import ForoButton from "$lib/components/features/Point-Hansuu/FuroButton.svelte";

  import type { PointData } from "$lib/models/Point-Hansuu/types.js";

  let buttonStates: { [key: string]: boolean } = {};
  let doraCount: { [key: string]: number } = {};
  let error: string | null = null;

  let fu: number = 30;
  let han: number = 0;
  let pointData: PointData = {
    oyaRonPoint: 0,
    oyaTumoPoint: 0,
    koRonPoint: 0,
    koTumoPoint_oya: 0,
    koTumoPoint_ko: 0,
  };

  let isChecked: boolean = false;

  async function calculatePoints() {
    try {
      const response = await fetch(`/api/point?fu=${fu}&han=${han}`);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      pointData.oyaRonPoint = data.oyaRonPoint;
      pointData.oyaTumoPoint = data.oyaTumoPoint;
      pointData.koRonPoint = data.koRonPoint;
      pointData.koTumoPoint_oya = data.koTumoPoint_oya;
      pointData.koTumoPoint_ko = data.koTumoPoint_ko;
    } catch (e) {
      error = e instanceof Error ? e.message : "An unknown error occurred";
    }
  }

  $: {
    if (han !== undefined || fu !== undefined) {
      calculatePoints();
    }
  }

  function clearHan() {
    han = 0;
    fu = 30;
    Object.keys(buttonStates).forEach((key) => {
      buttonStates[key] = false;
    });
    Object.keys(doraCount).forEach((key) => {
      doraCount[key] = 0;
    });
  }

  function handleToggle() {
    isChecked = !isChecked;
    clearHan();
  }
</script>

<div class="flex-none">
  <PointHeader
    bind:isChecked
    onToggle="{handleToggle}"
    onClear="{clearHan}"
    type="han"
  />
  <PointBord bind:fu bind:han bind:pointData />
</div>

<div class="flex-grow overflow-y-auto">
  {#if isChecked}
    <ForoButton bind:han bind:buttonStates bind:doraCount />
  {:else}
    <MenzenButton bind:han bind:buttonStates bind:doraCount />
  {/if}
</div> -->

<script lang="ts">
  import PointHeader from "$lib/components/ui/PointHeader.svelte";
  import PointBord from "$lib/components/features/Point-Hansuu/PointBord.svelte";
  import MenzenButton from "$lib/components/features/Point-Hansuu/MenzenButton.svelte";
  import ForoButton from "$lib/components/features/Point-Hansuu/FuroButton.svelte";

  import type { PointData } from "$lib/models/Point-Hansuu/types.js";

  let buttonStates: { [key: string]: boolean } = {};
  let doraCount: { [key: string]: number } = {};
  let error: string | null = null;

  let fu: number = 30;
  let han: number = 0;
  let pointData: PointData = {
    oyaRonPoint: 0,
    oyaTumoPoint: 0,
    koRonPoint: 0,
    koTumoPoint_oya: 0,
    koTumoPoint_ko: 0,
  };

  let isChecked: boolean = false;

  async function calculatePoints() {
    try {
      const response = await fetch(`/api/point?fu=${fu}&han=${han}`);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      pointData.oyaRonPoint = data.oyaRonPoint;
      pointData.oyaTumoPoint = data.oyaTumoPoint;
      pointData.koRonPoint = data.koRonPoint;
      pointData.koTumoPoint_oya = data.koTumoPoint_oya;
      pointData.koTumoPoint_ko = data.koTumoPoint_ko;
    } catch (e) {
      error = e instanceof Error ? e.message : "An unknown error occurred";
    }
  }

  $: {
    if (han !== undefined || fu !== undefined) {
      calculatePoints();
    }
  }

  function clearHan() {
    han = 0;
    fu = 30;
    Object.keys(buttonStates).forEach((key) => {
      buttonStates[key] = false;
    });
    Object.keys(doraCount).forEach((key) => {
      doraCount[key] = 0;
    });
  }

  function handleToggle() {
    isChecked = !isChecked;
    clearHan();
  }
</script>

<div class="flex-none">
  <PointHeader
    bind:isChecked
    onToggle="{handleToggle}"
    onClear="{clearHan}"
    type="han"
  />
  <PointBord bind:fu bind:han bind:pointData />
</div>

<div class="flex-grow overflow-y-auto">
  {#if isChecked}
    <ForoButton bind:han bind:buttonStates bind:doraCount />
  {:else}
    <MenzenButton bind:han bind:buttonStates bind:doraCount />
  {/if}
</div>
