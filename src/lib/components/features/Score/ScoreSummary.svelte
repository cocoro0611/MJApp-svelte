<script lang="ts">
  import type { Room } from "$lib/models/interface.js";
  import ScoreCard from "$lib/components/ui/ScoreCard.svelte";
  export let rooms: Room[];

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleRoomClick = (room: Room) => {
    dispatch("roomClick", room);
  };
</script>

{#each rooms as room}
  <div class="flex justify-center py-2">
    <ScoreCard {room} on:click="{() => handleRoomClick(room)}" />
  </div>
{/each}
