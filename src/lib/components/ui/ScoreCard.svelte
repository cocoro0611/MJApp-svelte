<script lang="ts">
  import Modal from "../layout/Modal.svelte";
  import ButtonAction from "./ButtonAction.svelte";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let score: ScoreData;
  export let room: RoomData;

  export let inputValues: Record<string, number> = {};
  export let selectedScoreId: string | null;
  export let scoreClick: (score: ScoreData, scoreId: string) => void;

  let initialTotalPoint: number = room.initialPoint * 4;
  $: totalPoint =
    initialTotalPoint -
    score.userScores.reduce((sum, userScore) => {
      const input = inputValues[userScore.id] ?? userScore.input ?? 0;
      return sum + input * 100;
    }, 0);

  function handleScoreClick(scoreId: string) {
    scoreClick(score, scoreId);
  }

  let popupModal = false;
</script>

<input type="hidden" name="gameCount[]" value="{score.gameCount}" />
{#each score.userScores as userScore}
  <input type="hidden" name="id[]" value="{userScore.id}" />
  <input
    type="hidden"
    name="input[]"
    value="{inputValues[userScore.id] ?? userScore.input ?? 0}"
  />
{/each}
<div
  class="grid grid-cols-5 bg-gray-100 font-bold
  {score.gameCount === 1 ? '' : '-mt-1'}"
>
  <div
    class="bg-white border-2 border-gray-300 h-22 flex justify-center flex-col items-center text-sm"
  >
    {#if totalPoint === 0}
      <button
        type="button"
        on:click="{() => {
          popupModal = true;
        }}"
        class="border-2 border-blue-300 hover:bg-blue-300 p-1 rounded bg-blue-100 text-blue-800 h-12 w-16 flex justify-center items-center"
      >
        {score.gameCount} 回戦
      </button>
      <!-- TODO: スコアとチップの詳細ページと削除 -->
      <Modal isButton="{false}" bind:popupModal>
        <div>
          {score.gameCount} 回戦の詳細
        </div>
        <ButtonAction
          variant="close"
          on:click="{() => {
            popupModal = false;
          }}"
        >
          閉じる
        </ButtonAction>
      </Modal>
    {/if}
    {#if totalPoint !== 0}
      <div>-点数-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500">{totalPoint}</div>
    {/if}
  </div>
  {#each score.userScores as userScore}
    <div
      class="flex flex-col bg-white border-y-2 border-r-2 border-gray-300 p-[0.1rem] text-blue-800"
    >
      <button type="button" on:click="{() => handleScoreClick(userScore.id)}">
        <div
          class="bg-blue-100 border-2 border-blue-300 h-14 rounded-lg flex flex-col justify-center
         {selectedScoreId === userScore.id
            ? 'bg-yellow-100 border-yellow-300'
            : ''}"
        >
          <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">点数</div>
          <div class="flex justify-center">
            <span
              class="border-b-2 border-blue-300 px-1
              {selectedScoreId === userScore.id ? 'border-yellow-300' : ''}"
            >
              {inputValues[userScore.id] ?? userScore.input ?? 0}</span
            >
            <span>00</span>
          </div>
        </div>
      </button>
      <div
        class="flex justify-center text-sm {userScore.score < 0
          ? 'text-red-500'
          : ''}"
      >
        {userScore.score}
      </div>
    </div>
  {/each}
</div>
