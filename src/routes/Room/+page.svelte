<script lang="ts">
  import RoomHome from "./home/+page.svelte";
  import RoomNew from "./new/+page.svelte";
  import RoomDetail from "./detail/+page.svelte";

  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData } from "$lib/models/Room/type.js";
  export let rooms: RoomData[];
  export let users: UserData[];

  let currentPage: "roomHome" | "roomNew" | "roomDetail" = "roomHome";

  let selectedRoom: RoomData;

  const handleRoomSelect = (event: CustomEvent<RoomData>) => {
    selectedRoom = event.detail;
    currentPage = "roomDetail";
  };
</script>

{#if currentPage === "roomHome"}
  <RoomHome {rooms} bind:currentPage on:select="{handleRoomSelect}" />
{:else if currentPage === "roomNew"}
  <RoomNew {users} bind:currentPage />
{:else if currentPage === "roomDetail"}
  <RoomDetail {users} bind:currentPage room="{selectedRoom}" />
{/if}
