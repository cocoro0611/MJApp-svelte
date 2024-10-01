<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import ScoreForm from "$lib/components/features/Room/ScoreForm.svelte";
  import ChipForm from "$lib/components/features/Room/ChipForm.svelte";

  import { currentPage } from "$lib/utils/pageStore.js";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  import type { UserData } from "$lib/models/Member/type.js";

  export let users: UserData[];
  export let scores: ScoreData[];
  export let room: RoomData;
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{() => ($currentPage = 'room')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
  <svelte:fragment slot="right">
    <RoomForm action="?/delete-room" {users} {room} />
  </svelte:fragment>
  <RoomScore {room} />
</Header>

<!-- TODO:チップの追加 -->
<Main isScoreHeader>
  <ScoreForm {scores} {room} action="?/create-score" />
  <ScoreForm {scores} {room} action="?/update-score" />

  <ChipForm {scores} {room} action="?/create-chip" />
  <!-- <ChipForm {scores} {room} action="?/update-chip" /> -->
</Main>
