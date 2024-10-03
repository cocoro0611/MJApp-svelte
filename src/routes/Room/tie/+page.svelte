<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import RoomScore from "$lib/components/features/Room/RoomScore.svelte";
  import Form from "$lib/components/layout/Form.svelte";
  import ScoreForm from "$lib/components/features/Room/ScoreForm.svelte";
  import ChipForm from "$lib/components/features/Room/ChipForm.svelte";

  import { currentPage } from "$lib/utils/pageStore.js";
  import type { RoomData, ScoreData, ChipData } from "$lib/models/Room/type.js";

  export let room: RoomData;
  export let scores: ScoreData[];

  $: filteredScores = scores.filter((score) => score.roomId === room.id);
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{() => ($currentPage = 'roomDetail')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
</Header>

<Main
  >順位を選択してください

  {#each filteredScores as score}
    {score.gameCount}
  {/each}
</Main>
