<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import PointCard from "$lib/components/features/Room/PointCard.svelte";
  import PointKeyboard from "$lib/components/features/Room/PointKeyboard.svelte";

  import type { RoomData } from "$lib/models/Room/type.js";
  import type { UserData } from "$lib/models/Member/type.js";
  import type { ScoreData } from "$lib/models/Room/type.js";
  export let users: UserData[];
  export let room: RoomData;
  let scores: ScoreData[] = [
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 1,
    },
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 2,
    },
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: -20,
      chip: 0,
      roomId: "",
      userId: "",
      order: 3,
    },
    {
      id: "",
      gamesNumber: 1,
      score: 250,
      point: 0,
      chip: 0,
      roomId: "",
      userId: "",
      order: 4,
    },
  ];

  let input: number = 0;
  let isInput: boolean = false;
  const openInput = () => {
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
  <button class="w-20 bg-blue-500 p-2" on:click="{openInput}"> あああ </button>
  {input}
  <PointCard {scores} bind:input />
  {#if isInput}
    <PointKeyboard bind:input bind:isInput />
  {/if}
</Main>
