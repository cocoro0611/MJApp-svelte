<script lang="ts">
  import type { Room } from "$lib/models/Total-Point/types.js";
  import ScoreCard from "$lib/components/ui/ScoreCard.svelte";
  export let rooms: Room[];

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleRoomClick = (room: Room) => {
    dispatch("roomClick", room);
  };
</script>

<div class="flex justify-center">
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    {#each rooms as room}
      <ScoreCard {room} on:click="{() => handleRoomClick(room)}" />
    {/each}
  </div>
</div>
