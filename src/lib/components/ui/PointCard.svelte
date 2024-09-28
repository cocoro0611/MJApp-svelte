<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";

  export let score: ScoreData;
  export let room: RoomData;
  export let selectedScoreId: string | null;

  const dispatch = createEventDispatcher();

  let initialTotalPoint: number = room.initialPoint * 4;
  $: totalPoint =
    initialTotalPoint -
    score.userScores.reduce((sum, userScore) => sum + userScore.input * 100, 0);

  function handleScoreClick(scoreId: string, input: number) {
    dispatch("scoreClick", { scoreId, input });
  }
</script>

<!-- TODO:スコアの重複のときの処理 -->
<!-- TODO:何回戦をクリックしたときの詳細ページの作成（スコアの削除ができたらなおいい） -->
<input type="hidden" name="initialPoint" value="{room.initialPoint}" />
<input type="hidden" name="returnPoint" value="{room.returnPoint}" />
<input type="hidden" name="bonusPoint" value="{room.bonusPoint}" />
{#each score.userScores as userScore}
  <input type="hidden" name="id[]" value="{userScore.id}" />
  <input type="hidden" name="input[]" value="{userScore.input}" />
{/each}

<div class="grid grid-cols-5 bg-gray-100 font-bold -mt-1">
  <div
    class="bg-white border-2 border-gray-300 h-22 flex justify-center flex-col items-center text-sm"
  >
    {#if totalPoint === 0}
      <div
        class="border-2 border-blue-300 p-1 rounded bg-blue-100 text-blue-800 w-16 flex justify-center items-center"
      >
        {score.gameCount} 回戦
      </div>
    {:else}
      <div>-点数-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500">{totalPoint}</div>
    {/if}
  </div>
  {#each score.userScores as userScore}
    <div
      class="flex flex-col bg-white border-y-2 border-r-2 border-gray-300 p-[0.1rem] text-blue-800"
    >
      <button
        on:click="{() => handleScoreClick(userScore.id, userScore.input)}"
      >
        <div
          class="bg-blue-100 border-2 border-blue-300 h-14 rounded-lg flex flex-col justify-center
                 {selectedScoreId === userScore.id
            ? 'bg-yellow-100 border-yellow-300'
            : ''}"
        >
          <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">点数</div>
          <div class="flex justify-center">
            <span
              class="border-b-2 border-blue-300 px-1 {selectedScoreId ===
              userScore.id
                ? 'border-yellow-300'
                : ''}">{userScore.input}</span
            >
            <span>00</span>
          </div>
        </div>
      </button>
      <div class="flex justify-center text-sm">
        {userScore.score}
      </div>
    </div>
  {/each}
</div>
