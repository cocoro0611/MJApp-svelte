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
      id: "1",
      score: 0,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 1,
    },
    {
      id: "2",
      score: 0,
      point: 10,
      chip: 0,
      roomId: "",
      userId: "",
      order: 2,
    },
    {
      id: "3",
      score: 0,
      point: -20,
      chip: 0,
      roomId: "",
      userId: "",
      order: 3,
    },
    {
      id: "4",
      score: 0,
      point: 0,
      chip: 0,
      roomId: "",
      userId: "",
      order: 4,
    },
  ];

  let isInput: boolean = false;
  let activeScoreIndex: number = -1;

  const openKeyboard = (index: number) => {
    activeScoreIndex = index;
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
  <PointCard bind:scores {openKeyboard} bind:activeScoreIndex bind:isInput />
  {#if isInput}
    <PointKeyboard
      bind:scores
      bind:isInput
      bind:activeScoreIndex
      {openKeyboard}
    />
  {/if}
</Main>
