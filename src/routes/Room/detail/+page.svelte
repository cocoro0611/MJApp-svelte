<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import PointCard from "$lib/components/features/Room/PointCard.svelte";
  import PointKeyboard from "$lib/components/features/Room/PointKeyboard.svelte";

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];
  export let room: RoomData;
  export let scores: ScoreData[];

  let isInput: boolean = false;
  let activeScoreIndex: number = -1;
  let activeGameIndex: number = -1;

  const openKeyboard = (gameIndex: number, playerIndex: number) => {
    activeGameIndex = gameIndex;
    activeScoreIndex = playerIndex;
    isInput = true;
  };

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
    <RoomForm bind:currentPage isDelete {room} {users} />
  </svelte:fragment>
  <RoomScore {room} />
</Header>

<Main isScoreHeader>
  {#each scores as score, gameIndex}
    <PointCard
      bind:score
      openKeyboard="{(playerIndex) => openKeyboard(gameIndex, playerIndex)}"
      isActiveGame="{gameIndex === activeGameIndex}"
      activeScoreIndex="{gameIndex === activeGameIndex ? activeScoreIndex : -1}"
      {isInput}
    />
  {/each}
  {#if isInput}
    <PointKeyboard
      bind:scores
      bind:isInput
      gameIndex="{activeGameIndex}"
      playerIndex="{activeScoreIndex}"
      openKeyboard="{(gameIndex, playerIndex) =>
        openKeyboard(gameIndex, playerIndex)}"
    />
  {/if}
</Main>
