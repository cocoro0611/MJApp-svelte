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
  export let scores: ScoreData[];
  export let room: RoomData;

  let method: string = "";
  let action: string = "";
  const updateScore = () => {
    method = "POST";
    action = "?/updateScore";
  };
  const createScore = () => {
    method = "POST";
    action = "?/createScore";
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
    <RoomForm bind:currentPage isDelete {users} {room} />
  </svelte:fragment>
  <RoomScore {room} />
</Header>

<Main isScoreHeader>
  <form {method} {action}>
    {#each scores as score}
      {#if room.id === score.roomId}
        <PointCard {room} {score} />
      {/if}
    {/each}

    <input type="hidden" name="roomId" value="{room.id}" />
    <input
      type="hidden"
      name="gameCount"
      value="{Math.max(
        ...scores
          .filter((score) => score.roomId === room.id)
          .map((score) => score.gameCount)
      ) + 1}"
    />
    {#each room.users as user}
      <input type="hidden" name="userId" value="{user.id}" />
    {/each}
    <button on:click="{createScore}">追加</button>
    <button on:click="{updateScore}">更新</button>
  </form>
</Main>
