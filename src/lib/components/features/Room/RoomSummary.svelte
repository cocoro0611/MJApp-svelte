<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { Room } from "$lib/models/interface.js";
  import ScoreCard from "$lib/components/ui/RoomCard.svelte";
  export let rooms: Room[];

  const dispatch = createEventDispatcher<{
    select: Room;
  }>();

  const selectedRoom = (user: Room) => {
    dispatch("select", user);
  };
</script>

{#each rooms as room}
  <div class="flex justify-center py-2">
    <ScoreCard {room} on:click="{() => selectedRoom(room)}" />
  </div>
{/each}
