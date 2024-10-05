<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";

  import { currentPage } from "$lib/utils/page-store.js";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";

  export let room: RoomData;
  export let scores: ScoreData[];

  $: filteredScores = scores.filter((score) => score.roomId === room.id);
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon iconType="back" on:click="{() => ($currentPage = 'roomDetail')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">{room.name}</svelte:fragment>
</Header>

<Main
  >順位を選択してください
  {#each filteredScores as score}
    {score.roomId}
    {score.gameCount}
    {#each score.userScores as userScore}
      <!-- {userScore.id}
      {userScore.input}
      {userScore.score} -->
    {/each}
  {/each}
</Main>
