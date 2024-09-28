<script lang="ts">
  import ScoreCard from "$lib/components/ui/RoomCard.svelte";

  import { createEventDispatcher } from "svelte";

  import type { RoomData } from "$lib/models/Room/type.js";

  export let rooms: RoomData[];

  const dispatch = createEventDispatcher<{
    select: RoomData;
  }>();

  const selectedRoom = (room: RoomData) => {
    dispatch("select", room);
  };
</script>

{#each rooms as room}
  <div class="flex justify-center py-2">
    <ScoreCard {room} on:click="{() => selectedRoom(room)}" />
  </div>
{/each}
