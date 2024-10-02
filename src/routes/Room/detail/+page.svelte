<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomForm from "$lib/components/features/Room/RoomForm.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import Form from "$lib/components/layout/Form.svelte";
  import ScoreForm from "$lib/components/features/Room/ScoreForm.svelte";
  import ChipForm from "$lib/components/features/Room/ChipForm.svelte";

  import { currentPage } from "$lib/utils/pageStore.js";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";

  export let scores: ScoreData[];
  export let room: RoomData;
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{() => ($currentPage = 'room')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
  <svelte:fragment slot="right">
    <Form action="?/delete-room">
      <input type="hidden" name="roomId" value="{room.id}" />
    </Form>
  </svelte:fragment>
  <RoomScore {room} />
</Header>

<!-- TODO:チップの追加 -->
<Main isScoreHeader>
  <Form action="create-score-chip">
    <input type="hidden" name="roomId" value="{room.id}" />
  </Form>

  <ScoreForm {scores} {room} action="?/update-score" />

  <!-- <ChipForm {scores} {room} action="?/create-chip" /> -->
  <!-- <ChipForm {scores} {room} action="?/update-chip" /> -->
</Main>
