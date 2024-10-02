<script lang="ts">
  import Form from "$lib/components/layout/Form.svelte";
  import ChipCard from "$lib/components/ui/ChipCard.svelte";
  import PointKeyboard from "$lib/components/ui/PointKeyboard.svelte";
  import { chipClick, navigateChip } from "$lib/utils/PointKeyboard.js";

  import type { RoomData, ChipData } from "$lib/models/Room/type.js";
  export let chips: ChipData[];
  export let room: RoomData;

  export let action;

  let inputValues: Record<string, number> = {};
  let selectedChipId: string | null = null;
  let openKeyboard: boolean = false;
  let activeChipIndex: number = 0;

  $: filteredChips = chips.filter((chip) => chip.roomId === room.id);
  $: activeChip = filteredChips[activeChipIndex];

  //FIXME：処理の見直し
  function handleChipClick(chip: ChipData, chipId: string) {
    openKeyboard = true;
    const result = chipClick(chip, chipId, filteredChips, inputValues);
    selectedChipId = result.selectedChipId;
    activeChipIndex = result.activeChipIndex;
    inputValues = result.updatedInputValues;
  }

  function handleNavigateChip(direction: "left" | "right") {
    const newChipId = navigateChip(direction, selectedChipId, activeChip);
    if (newChipId && activeChip) {
      handleChipClick(activeChip, newChipId);
    }
  }
</script>

<Form {action} bind:openKeyboard bind:selectedChipId>
  <input type="hidden" name="roomId" value="{room.id}" />
  {#each filteredChips as chip}
    <ChipCard
      {room}
      {chip}
      bind:inputValues
      bind:selectedChipId
      chipClick="{handleChipClick}"
    />
  {/each}
  {#if openKeyboard}
    <!-- // キーボードの高さ -->
    <div class="h-[15rem]"></div>
    <PointKeyboard
      inputType="{'chip'}"
      bind:openKeyboard
      bind:inputValues
      bind:selectedChipId
      navigate="{handleNavigateChip}"
    />
  {/if}
</Form>
