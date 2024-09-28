<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import ScoreForm from "$lib/components/features/Room/ScoreForm.svelte";

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];
  export let scores: ScoreData[];
  export let room: RoomData;

  // FIXME:ローカルストレージの保存
  export let currentPage: "roomHome" | "roomNew" | "roomDetail" = "roomHome";
  const backPage = () => {
    currentPage = "roomHome";
    localStorage.setItem("roomCurrentPage", currentPage);
    localStorage.removeItem("selectedRoomId");
  };
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
  <svelte:fragment slot="right">
    <RoomForm bind:currentPage isDelete {users} {room} />
  </svelte:fragment>
  <RoomScore {room} />
</Header>

<Main isScoreHeader>
  <ScoreForm formAction="create" {scores} {room} />
  <ScoreForm formAction="update" {scores} {room} />
</Main>
