<script lang="ts">
  import ScoreCard from "$lib/components/ui/RoomCard.svelte";
  import { saveLocalData } from "$lib/utils/localStorage.js";
  import { currentPage } from "$lib/utils/pageStore.js";

  import type { RoomData } from "$lib/models/Room/type.js";
  export let rooms: RoomData[];

  const selectedRoom = (room: RoomData) => {
    saveLocalData("roomId", room.id);
    currentPage.set("roomDetail");
  };
</script>

{#each rooms as room}
  <div class="flex justify-center py-2">
    <ScoreCard {room} on:click="{() => selectedRoom(room)}" />
  </div>
{/each}
