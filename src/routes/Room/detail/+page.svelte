<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import ScoreForm from "$lib/components/features/Room/ScoreForm.svelte";
  import ChipForm from "$lib/components/features/Room/ChipForm.svelte";

  import type { PageType } from "$lib/models/page-type.js";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  import type { UserData } from "$lib/models/Member/type.js";

  import { saveLocalData, removeLocalData } from "$lib/utils/localStorage.js";

  export let users: UserData[];
  export let scores: ScoreData[];
  export let room: RoomData;

  export let currentPage: PageType;
  const backPage = () => {
    currentPage = "room";
    saveLocalData("currentPage", currentPage);
    removeLocalData("roomId");
  };

  let popupModal = false;
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{backPage}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
  <svelte:fragment slot="right">
    <RoomForm formAction="delete" {users} {room} />
  </svelte:fragment>
  <RoomScore {room} bind:popupModal />
</Header>

<!-- TODO:チップの追加 -->
<Main isScoreHeader>
  {#if !popupModal}
    <ScoreForm formAction="create" {scores} {room} />
    <ChipForm formAction="create" {scores} {room} />
  {/if}
  <ScoreForm formAction="update" {scores} {room} />
  <ChipForm formAction="update" {scores} {room} />
</Main>
