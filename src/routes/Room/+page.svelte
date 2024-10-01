<script lang="ts">
  import RoomHome from "./home/+page.svelte";
  import RoomNew from "./new/+page.svelte";
  import RoomEdit from "./edit/+page.svelte";
  import RoomUserEdit from "./user-edit/+page.svelte";
  import RoomDetail from "./detail/+page.svelte";
  import { currentPage } from "$lib/utils/pageStore.js";
  import { getLocalData } from "$lib/utils/localStorage.js";

  import type { UserData } from "$lib/models/Member/type.js";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let users: UserData[];
  export let rooms: RoomData[];
  export let scores: ScoreData[];

  $: selectedRoom =
    $currentPage === "roomEdit" || $currentPage === "roomDetail"
      ? rooms.find((room) => room.id === getLocalData("roomId")) || null
      : null;
  $: selectedRoomUser =
    $currentPage === "roomUserEdit"
      ? users.find((user) => user.id === getLocalData("userId")) || null
      : null;
</script>

{#if $currentPage === "room"}
  <RoomHome {rooms}></RoomHome>
{:else if $currentPage === "roomNew"}
  <RoomNew {users} />
{:else if $currentPage === "roomEdit" && selectedRoom}
  <RoomEdit room="{selectedRoom}" />
{:else if $currentPage === "roomUserEdit" && selectedRoomUser}
  <RoomUserEdit user="{selectedRoomUser}" />
{:else if $currentPage === "roomDetail" && selectedRoom}
  <RoomDetail {users} {scores} room="{selectedRoom}" />
{/if}
