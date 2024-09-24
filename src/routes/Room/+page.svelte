<script lang="ts">
  import { onMount } from "svelte";
  import RoomHome from "./home/+page.svelte";
  import RoomNew from "./new/+page.svelte";
  import RoomDetail from "./detail/+page.svelte";

  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData } from "$lib/models/Room/type.js";
  export let rooms: RoomData[];
  export let users: UserData[];

  type RoomPageType = "roomHome" | "roomNew" | "roomDetail";
  let currentPage: RoomPageType = "roomHome";

  let selectedRoom: RoomData;

  const handleRoomSelect = (event: CustomEvent<RoomData>) => {
    selectedRoom = event.detail;
    currentPage = "roomDetail";
    localStorage.setItem("roomCurrentPage", currentPage);
    localStorage.setItem("selectedRoomId", selectedRoom.id);
  };

  // FIXME:ローカルストレージの保存
  onMount(() => {
    const savedPage = localStorage.getItem(
      "roomCurrentPage"
    ) as RoomPageType | null;
    const savedRoomId = localStorage.getItem("selectedRoomId");

    if (savedPage) {
      currentPage = savedPage;
      if (savedPage === "roomDetail" && savedRoomId) {
        selectedRoom =
          rooms.find((room) => room.id === savedRoomId) || rooms[0];
      }
    }
  });
</script>

{#if currentPage === "roomHome"}
  <RoomHome {rooms} bind:currentPage on:select="{handleRoomSelect}" />
{:else if currentPage === "roomNew"}
  <RoomNew {users} bind:currentPage />
{:else if currentPage === "roomDetail"}
  <RoomDetail {users} bind:currentPage room="{selectedRoom}" />
{/if}
