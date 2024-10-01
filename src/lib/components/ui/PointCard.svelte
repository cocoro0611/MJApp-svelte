<script lang="ts">
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let score: ScoreData;
  export let room: RoomData;

  export let isChip: boolean = false;

  export let input = 0;
  export let isKeyboard: boolean = false;
  export let selectedScore: string | null;

  function scoreClick(scoreId: string) {
    isKeyboard = true;
    selectedScore = scoreId;
    const clickedUserScore = score.userScores.find((us) => us.id === scoreId);
    if (clickedUserScore) {
      input = clickedUserScore.input;
    }
  }

  let initialTotalPoint: number = room.initialPoint * 4;
  $: totalPoint =
    initialTotalPoint -
    score.userScores.reduce((sum, userScore) => sum + userScore.input * 100, 0);
</script>

<!-- TODO:スコアの重複のときの処理 -->
<!-- TODO:何回戦をクリックしたときの詳細ページの作成（スコアの削除ができたらなおいい） -->
<input type="hidden" name="gameCount[]" value="{score.gameCount}" />
{#each score.userScores as userScore}
  <input type="hidden" name="id[]" value="{userScore.id}" />
  <input type="hidden" name="input[]" value="{userScore.input}" />
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
        class="border-2 border-blue-300 hover:bg-blue-300 p-1 rounded bg-blue-100 text-blue-800 h-12 w-16 flex justify-center items-center"
      >
        {score.gameCount} 回戦
      </button>
    {/if}
    {#if totalPoint !== 0}
      {#if !isChip}
        <div>-点数-</div>
        <div class="text-red-500">あと</div>
        <div class="text-red-500">{totalPoint}</div>
      {/if}
      {#if isChip}
        <div>-チップ-</div>
        <div class="text-red-500">あと</div>
        <div class="text-red-500">20</div>
      {/if}
    {/if}
  </div>
  {#each score.userScores as userScore}
    <div
      class="flex flex-col bg-white border-y-2 border-r-2 border-gray-300 p-[0.1rem] text-blue-800"
    >
      <button type="button" on:click="{() => scoreClick(userScore.id)}">
        <div
          class="bg-blue-100 border-2 border-blue-300 h-14 rounded-lg flex flex-col justify-center
                 {selectedScore === userScore.id
            ? 'bg-yellow-100 border-yellow-300'
            : ''}"
        >
          <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">点数</div>
          <div class="flex justify-center">
            <span
              class="border-b-2 border-blue-300 px-1 {selectedScore ===
              userScore.id
                ? 'border-yellow-300'
                : ''}"
              >{selectedScore === userScore.id ? input : userScore.input}</span
            >
            <span>00</span>
          </div>
        </div>
      </button>
      <div
        class="flex justify-center text-sm
      {userScore.score < 0 ? 'text-red-500' : ''}
      "
      >
        {userScore.score}
      </div>
    </div>
  {/each}
</div>
