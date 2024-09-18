<script lang="ts">
  import PointBord from "$lib/components/ui/PointBord.svelte";
  import FuCountButton from "$lib/components/features/Point-Fusuu/FuCountButton.svelte";
  import type { PointData } from "$lib/models/types.js";
  import { formatFuValue } from "$lib/utils/formatFuValue.js";

  let han: number = 0;
  let fu: number = 30;
  let fuUp: number = 30;

  let pointData: PointData = {
    oyaRon: 0,
    oyaTumo: 0,
    koRon: 0,
    koTumo_oya: 0,
    koTumo_ko: 0,
  };

  $: fuUp = formatFuValue(fu);

  // API
  let error: string | null = null;
  async function calculatePoints() {
    try {
      const response = await fetch(`/api/point?fu=${fuUp}&han=${han}`);
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

  let fuCountButton: FuCountButton;

  const clearValue = () => {
    han = 0;
    fu = 30;
    if (fuCountButton) {
      fuCountButton.resetItemsStores();
    }
  };
</script>

<PointBord
  type="fu"
  bind:han
  bind:fu
  bind:fuUp
  bind:pointData
  on:click="{clearValue}"
/>

<div class="flex-grow overflow-y-auto">
  <FuCountButton bind:this="{fuCountButton}" bind:han bind:fu />
</div>
