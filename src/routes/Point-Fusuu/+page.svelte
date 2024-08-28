<script lang="ts">
  import PointHeader from "$lib/components/ui/PointHeader.svelte";
  import PointBord from "$lib/components/features/Point-Fusuu/PointBord.svelte";
  import FuCountButton from "$lib/components/features/Point-Fusuu/FuCountButton.svelte";

  import type { PointData } from "$lib/models/Point-Fusuu/types.js";

  let buttonStates: { [key: string]: boolean } = {};
  let count: { [key: string]: number } = {};

  let error: string | null = null;

  let fu: number = 20;
  let han: number = 0;
  let pointData: PointData = {
    oyaRonPoint: 0,
    oyaTumoPoint: 0,
    koRonPoint: 0,
    koTumoPoint_oya: 0,
    koTumoPoint_ko: 0,
  };

  function formatFuValue(value: number | null | undefined): string {
    if (value === null) return "-";
    if (value === undefined) return "0";
    if (value === 25 || (value % 2 !== 0 && value > 25)) return "25";
    const fuRanges = [
      { min: 20, max: 30, output: "30" },
      { min: 30, max: 40, output: "40" },
      { min: 40, max: 50, output: "50" },
      { min: 50, max: 60, output: "60" },
      { min: 60, max: 70, output: "70" },
      { min: 70, max: 80, output: "80" },
      { min: 80, max: 90, output: "90" },
      { min: 90, max: 100, output: "100" },
      { min: 100, max: Infinity, output: "110" },
    ];
    for (const range of fuRanges) {
      if (value > range.min && value < range.max) {
        return range.output;
      }
    }
    return `${value}`;
  }

  async function calculatePoints() {
    try {
      const response = await fetch(
        `/api/point?fu=${formatFuValue(fu)}&han=${han}`,
      );
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
    fu = 20;
    Object.keys(buttonStates).forEach((key) => {
      buttonStates[key] = false;
    });
    Object.keys(count).forEach((key) => {
      count[key] = 0;
    });
  }
</script>

<div class="flex-none">
  <PointHeader onClear="{clearHan}" type="fu" />
  <PointBord bind:fu bind:han bind:pointData />
</div>

<div class="flex-grow overflow-y-auto">
  <FuCountButton bind:han bind:fu bind:buttonStates bind:count />
</div>
