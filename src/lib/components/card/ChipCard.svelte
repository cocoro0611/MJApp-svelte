<script lang="ts">
  import type { RoomData, ChipData } from "$lib/models/Room/type.js";
  export let chip: ChipData;
  export let room: RoomData;

  export let inputValues: Record<string, number> = {};
  export let selectedChipId: string | null;
  export let chipClick: (chip: ChipData, chipId: string) => void;

  $: totalPoint =
    80 -
    chip.userChips.reduce((sum, userChip) => {
      const input = inputValues[userChip.id] ?? userChip.input ?? 0;
      return sum + input;
    }, 0);

  function handleScoreClick(chipId: string) {
    chipClick(chip, chipId);
  }
</script>

<input type="hidden" name="chipCount[]" value="{chip.chipCount}" />
{#each chip.userChips as userChip}
  <input type="hidden" name="id[]" value="{userChip.id}" />
  <input
    type="hidden"
    name="input[]"
    value="{inputValues[userChip.id] ?? userChip.input ?? 0}"
  />
{/each}
<div class="grid grid-cols-5 bg-gray-100 font-bold -mt-1">
  <div
    class="bg-white border-2 border-gray-300 h-22 flex justify-center flex-col items-center text-sm"
  >
    {#if totalPoint === 0}
      <button
        type="button"
        class="border-2 border-blue-300 hover:bg-blue-300 p-1 rounded bg-blue-100 text-blue-800 h-12 w-16 flex flex-col justify-center items-center"
      >
        <span> {chip.chipCount} 回分</span>
        <span class="text-[0.55rem]">( 1人/20枚 )</span>
      </button>
    {/if}
    {#if totalPoint !== 0}
      <div>-チップ-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500">{totalPoint}枚</div>
    {/if}
  </div>
  {#each chip.userChips as userChip}
    <div
      class="flex flex-col bg-white border-y-2 border-r-2 border-gray-300 p-[0.1rem] text-blue-800"
    >
      <button type="button" on:click="{() => handleScoreClick(userChip.id)}">
        <div
          class="bg-blue-100 border-2 border-blue-300 h-14 rounded-lg flex flex-col justify-center
         {selectedChipId === userChip.id
            ? 'bg-yellow-100 border-yellow-300'
            : ''}"
        >
          <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">枚数</div>
          <div class="flex justify-center">
            <span
              class="border-b-2 border-blue-300 px-1
              {selectedChipId === userChip.id ? 'border-yellow-300' : ''}"
            >
              {inputValues[userChip.id] ?? userChip.input ?? 0}</span
            >
            <span>枚</span>
          </div>
        </div>
      </button>
      <div
        class="flex justify-center text-sm {userChip.chip < 20
          ? 'text-red-500'
          : ''}"
      >
        {(userChip.chip - 20) * room.chipRate} P
      </div>
    </div>
  {/each}
</div>
