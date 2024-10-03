<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import ButtonToggle from "$lib/components/ui/ButtonToggle.svelte";
  import PointBordSelect from "$lib/components/ui/PointBordSelect.svelte";
  import PointBordScore from "$lib/components/ui/PointBordScore.svelte";
  import MenzenButton from "$lib/components/features/HanCount/MenzenButton.svelte";
  import FuroButton from "$lib/components/features/HanCount/FuroButton.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";

  import type { PointData } from "$lib/models/Count/type.js";

  let han: number = 0;
  let fu: number = 30;
  let fuUp: number = 30;
  let isFuro: boolean = true;

  let pointData: PointData = {
    oyaRonPoint: 0,
    oyaTumoPoint: 0,
    koRonPoint: 0,
    koTumoPoint_oya: 0,
    koTumoPoint_ko: 0,
  };

  $: fuUp = fu;

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

  let menzenButton: MenzenButton;
  let furoButton: FuroButton;

  const clearValue = () => {
    han = 0;
    fu = 30;
    if (menzenButton) {
      menzenButton.resetItemsStores();
    }
    if (furoButton) {
      furoButton.resetItemsStores();
    }
  };

  const onToggle = (event: CustomEvent<boolean>) => {
    isFuro = event.detail;
    clearValue();
  };
</script>

<Header isLeftLong>
  <svelte:fragment slot="left">
    <ButtonToggle bind:isFuro on:toggle="{onToggle}" />
  </svelte:fragment>
  <svelte:fragment slot="center">
    <div class="text-blue-800">調整</div>
  </svelte:fragment>
  <svelte:fragment slot="right">
    <button on:click="{clearValue}"><Icon iconType="refresh" /></button>
  </svelte:fragment>
  <PointBordSelect type="han" bind:fu bind:han bind:fuUp />
  <PointBordScore bind:pointData />
</Header>

<Main isCalculationHeader>
  {#if isFuro}
    <MenzenButton bind:this="{menzenButton}" bind:han bind:fu />
  {:else}
    <FuroButton bind:this="{furoButton}" bind:han bind:fu />
  {/if}
</Main>
