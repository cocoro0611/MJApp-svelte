<script lang="ts">
  import { onMount } from "svelte";
  import PointBord from "$lib/components/features/Point-Hansuu/PointBord.svelte";
  import MenzenButton from "$lib/components/features/Point-Hansuu/MenzenButton.svelte";

  let fu = 30;
  let han = 0;
  let oyaRonPoint = 0;
  let oyaTumoPoint = 0;
  let koRonPoint = 0;
  let koTumoPoint_oya = 0;
  let koTumoPoint_ko = 0;

  let loading = true;
  let error: string | null = null;

  async function calculatePoints() {
    try {
      loading = true;
      error = null;
      const response = await fetch(`/api/point?fu=${fu}&han=${han}`);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      oyaRonPoint = data.oyaRonPoint;
      oyaTumoPoint = data.oyaTumoPoint;
      koRonPoint = data.koRonPoint;
      koTumoPoint_oya = data.koTumoPoint_oya;
      koTumoPoint_ko = data.koTumoPoint_ko;
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }

  $: {
    if (han !== undefined) {
      calculatePoints();
    }
  }

  onMount(() => {
    calculatePoints();
  });

  function clearHan() {
    han = 0;
  }
</script>

<div class="flex justify-end -mb-4">
  <button class="text-blue-500 font-bold mx-4" on:click="{clearHan}"
    >Clear</button
  >
</div>
<PointBord
  {fu}
  {han}
  {oyaRonPoint}
  {oyaTumoPoint}
  {koRonPoint}
  {koTumoPoint_oya}
  {koTumoPoint_ko}
/>
<MenzenButton bind:han />
