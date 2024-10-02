<script lang="ts">
  import Form from "$lib/components/layout/Form.svelte";
  import ScoreCard from "$lib/components/ui/ScoreCard.svelte";
  import PointKeyboard from "$lib/components/ui/PointKeyboard.svelte";
  import { scoreClick, navigateScore } from "$lib/utils/PointKeyboard.js";

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let scores: ScoreData[];
  export let room: RoomData;

  export let action;

  let inputValues: Record<string, number> = {};
  let selectedScoreId: string | null = null;
  let openKeyboard: boolean = false;
  let activeScoreIndex: number = 0;

  $: filteredScores = scores.filter((score) => score.roomId === room.id);
  $: activeScore = filteredScores[activeScoreIndex];

  //FIXME：処理の見直し
  function handleScoreClick(score: ScoreData, scoreId: string) {
    openKeyboard = true;
    const result = scoreClick(score, scoreId, filteredScores, inputValues);
    selectedScoreId = result.selectedScoreId;
    activeScoreIndex = result.activeScoreIndex;
    inputValues = result.updatedInputValues;
  }

  function handleNavigateScore(direction: "left" | "right") {
    const newScoreId = navigateScore(direction, selectedScoreId, activeScore);
    if (newScoreId && activeScore) {
      handleScoreClick(activeScore, newScoreId);
    }
  }
</script>

<Form {action} bind:openKeyboard bind:selectedScoreId>
  <input type="hidden" name="roomId" value="{room.id}" />
  {#each filteredScores as score}
    <ScoreCard
      {room}
      {score}
      bind:inputValues
      bind:selectedScoreId
      scoreClick="{handleScoreClick}"
    />
  {/each}
  {#if openKeyboard}
    <!-- // キーボードの高さ -->
    <div class="h-[15rem]"></div>
    <PointKeyboard
      inputType="{'score'}"
      bind:openKeyboard
      bind:inputValues
      bind:selectedScoreId
      navigate="{handleNavigateScore}"
    />
  {/if}
</Form>
