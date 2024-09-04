<script lang="ts">
  import PointBord from "$lib/components/ui/PointBord.svelte";
  import MenzenButton2 from "$lib/components/features/Point-Hansuu/MenzenButton2.svelte";
  import FuroButton2 from "$lib/components/features/Point-Hansuu/FuroButton2.svelte";
  import type { PointData } from "$lib/models/types.js";

  let han: number = 0;
  let fu: number = 30;
  let count: number = 0;
  let isFuro: boolean = true;

  let pointData: PointData = {
    oyaRon: 0,
    oyaTumo: 0,
    koRon: 0,
    koTumo_oya: 0,
    koTumo_ko: 0,
  };

  // API
  let error: string | null = null;
  async function calculatePoints() {
    try {
      const response = await fetch(`/api/point?fu=${fu}&han=${han}`);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      pointData = {
        oyaRon: data.oyaRonPoint,
        oyaTumo: data.oyaTumoPoint,
        koRon: data.koRonPoint,
        koTumo_oya: data.koTumoPoint_oya,
        koTumo_ko: data.koTumoPoint_ko,
      };
    } catch (e) {
      error = e instanceof Error ? e.message : "An unknown error occurred";
    }
  }
  $: {
    if (han !== undefined || fu !== undefined) {
      calculatePoints();
    }
  }

  let menzenButton2: MenzenButton2;
  let furoButton2: FuroButton2;

  const clearValue = () => {
    han = 0;
    fu = 30;
    count = 0;
    if (menzenButton2) {
      menzenButton2.resetItemsStores();
    }
    if (furoButton2) {
      furoButton2.resetItemsStores();
    }
  };

  const onToggle = () => {
    isFuro = !isFuro;
    clearValue();
  };
</script>

<PointBord
  type="han"
  bind:han
  bind:fu
  bind:pointData
  bind:isFuro
  on:click="{clearValue}"
  on:change="{onToggle}"
/>

<div class="flex-grow overflow-y-auto">
  {#if isFuro}
    <MenzenButton2 bind:this="{menzenButton2}" bind:han bind:count />
  {:else}
    <FuroButton2 bind:this="{furoButton2}" bind:han bind:count />
  {/if}
</div>
