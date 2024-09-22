<script lang="ts">
  import Header from "$lib/components/ui/Header.svelte";
  import Main from "$lib/components/ui/Main.svelte";
  import PointBordSelect from "$lib/components/ui/PointBordSelect.svelte";
  import PointBordScore from "$lib/components/ui/PointBordScore.svelte";
  import FuCountButton from "$lib/components/features/FuCount/FuCountButton.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import type { PointData } from "$lib/models/interface.js";

  import { formatFuValue } from "$lib/utils/formatFuValue.js";

  let han: number = 0;
  let fu: number = 30;
  let fuUp: number = 30;

  let pointData: PointData = {
    oyaRonPoint: 0,
    oyaTumoPoint: 0,
    koRonPoint: 0,
    koTumoPoint_oya: 0,
    koTumoPoint_ko: 0,
  };

  $: fuUp = formatFuValue(fu);

  // API
  async function calculatePoints() {
    const response = await fetch(`/api/point?fu=${fuUp}&han=${han}`);
    const data = await response.json();
    pointData = {
      oyaRonPoint: data.oyaRonPoint | 0,
      oyaTumoPoint: data.oyaTumoPoint | 0,
      koRonPoint: data.koRonPoint | 0,
      koTumoPoint_oya: data.koTumoPoint_oya | 0,
      koTumoPoint_ko: data.koTumoPoint_ko | 0,
    };
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

<Header isContents isLeftLong>
  <svelte:fragment slot="center">
    <div class="text-blue-800">調整</div>
  </svelte:fragment>
  <svelte:fragment slot="right">
    <button on:click="{clearValue}"><Icon type="refresh" /></button>
  </svelte:fragment>
  <PointBordSelect type="fu" bind:fu bind:han bind:fuUp />
  <PointBordScore bind:pointData />
</Header>

<Main isLongHeader>
  <FuCountButton bind:this="{fuCountButton}" bind:han bind:fu />
</Main>
