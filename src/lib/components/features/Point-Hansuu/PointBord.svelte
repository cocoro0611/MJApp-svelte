<script lang="ts">
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import type { PointData } from "$lib/models/Point-Hansuu/types.js";
  import { createEventDispatcher } from "svelte";

  export let fu: number | null = 30;
  export let han: number | null = 1;
  export let pointData: PointData = {
    oyaRonPoint: 1500,
    oyaTumoPoint: 500,
    koRonPoint: 1000,
    koTumoPoint_oya: 500,
    koTumoPoint_ko: 300,
  };

  let dropdownOpen = false;

  function formatValue(value: number | null | undefined): string {
    if (value === null) return "-";
    if (value === undefined) return "0";
    return `${value}`;
  }

  function formatMainScore(value: number | null | undefined): string {
    if (value === null) return "-";
    if (value === undefined) return "0";
    if (value === 8000) return "満貫";
    if (value === 12000) return "跳満";
    if (value === 16000) return "倍満";
    if (value === 24000) return "三倍満";
    if (value === 32000) return "役満";
    if (value === 64000) return "二倍役満";
    if (value === 96000) return "三倍役満";
    if (value === 128000) return "四倍役満";
    if (value === 160000) return "五倍役満";
    if (value === 192000) return "六倍役満";
    if (value === 224000) return "七倍役満";
    return `${value}点`;
  }

  function updateFu(newFu: number) {
    fu = newFu;
    dropdownOpen = false;
    dispatch("fuChange", { fu: newFu });
  }

  const fuOptions = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110];
</script>

<div class="flex justify-center text-sm font-bold text-blue-500 gap-6">
  <span>
    <button
      on:click="{() => (dropdownOpen = !dropdownOpen)}"
      aria-haspopup="true"
      aria-expanded="{dropdownOpen}"
    >
      {formatValue(fu)} 符
      <ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" />
    </button>
    <Dropdown bind:open="{dropdownOpen}" class="-mt-8">
      {#each fuOptions as fuValue}
        <DropdownItem>
          <button
            on:click="{() => updateFu(fuValue)}"
            on:keydown="{(e) => e.key === 'Enter' && updateFu(fuValue)}"
          >
            {fuValue} 符
          </button>
        </DropdownItem>
      {/each}
    </Dropdown>
  </span>
  <span>{formatValue(han)} 翻</span>
</div>
<div class="flex justify-center text-xl font-bold">
  {formatMainScore(pointData.koRonPoint)}
</div>
<div class="flex justify-center text-sm font-bold">
  <span>親：</span>
  <span>{formatValue(pointData.oyaRonPoint)}</span>
  <span>（{formatValue(pointData.oyaTumoPoint)}）</span>
</div>
<div class="flex justify-center text-sm font-bold">
  <span>子：</span>
  <span>{formatValue(pointData.koRonPoint)}</span>
  <span
    >（{formatValue(pointData.koTumoPoint_oya)}/{formatValue(
      pointData.koTumoPoint_ko,
    )}）</span
  >
</div>
