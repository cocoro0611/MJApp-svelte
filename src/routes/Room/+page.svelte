<script lang="ts">
  import RoomHome from "./home/+page.svelte";
  import RoomNew from "./new/+page.svelte";
  import RoomDetail from "./detail/+page.svelte";

  import type { PageType } from "$lib/models/page-type.js";
  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";

  import { onMount } from "svelte";
  import { getLocalData, saveLocalData } from "$lib/utils/localStorage.js";
  import { isValidRoomData } from "$lib/models/page-type.js";

  export let rooms: RoomData[];
  export let scores: ScoreData[];
  export let users: UserData[];

  let currentPage: PageType = "room";
  let selectedRoom: RoomData;

  const handleRoomSelect = (event: CustomEvent<RoomData>) => {
    selectedRoom = event.detail;
    currentPage = "roomDetail";
    saveLocalData("roomId", selectedRoom.id);
  };

  onMount(() => {
    const savedRoomId = getLocalData("roomId");
    if (savedRoomId) {
      const foundRoom = rooms.find((room) => room.id === savedRoomId);
      if (isValidRoomData(foundRoom)) {
        selectedRoom = foundRoom;
        currentPage = "roomDetail";
      }
    }
  });
</script>

{#if currentPage === "room"}
  <RoomHome {rooms} bind:currentPage on:select="{handleRoomSelect}"></RoomHome>
{:else if currentPage === "roomNew"}
  <RoomNew {users} bind:currentPage />
{:else if currentPage === "roomDetail"}
  <RoomDetail {users} {scores} bind:currentPage room="{selectedRoom}" />
{/if}
