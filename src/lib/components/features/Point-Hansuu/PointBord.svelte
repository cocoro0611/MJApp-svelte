<script lang="ts">
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import type { PointData } from "$lib/models/Point-Hansuu/types.js";
  import { onMount } from "svelte";

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
  let dropdownElement: HTMLElement;

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
  }

  const fuOptions = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110];

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function handleOutsideClick(event: MouseEvent) {
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      dropdownOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
</script>

<div class="flex justify-center text-sm font-bold text-blue-500 gap-4">
  <div class="relative" bind:this="{dropdownElement}">
    <button
      class="flex items-center justify-center w-24 h-8 px-2"
      on:click|stopPropagation="{toggleDropdown}"
      aria-haspopup="true"
      aria-expanded="{dropdownOpen}"
    >
      {formatValue(fu)} 符
      <ChevronDownOutline class="w-4 h-4 ms-1" />
    </button>
    {#if dropdownOpen}
      <div
        class="absolute z-10 w-24 bg-white border border-gray-200 rounded-md shadow-lg"
      >
        {#each fuOptions as fuValue}
          <button
            class="w-full px-4 py-2 text-left hover:bg-blue-100"
            on:click|stopPropagation="{() => updateFu(fuValue)}"
          >
            {fuValue} 符
          </button>
        {/each}
      </div>
    {/if}
  </div>
  <span class="flex items-center justify-center w-24 h-8">
    {formatValue(han)} 翻
  </span>
</div>
<div class="flex justify-center text-xl font-bold -mt-2">
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
      pointData.koTumoPoint_ko
    )}）</span
  >
</div>
