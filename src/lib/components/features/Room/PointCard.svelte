<script lang="ts">
  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  export let room: RoomData;
  export let score;

  let totalPoint: number = 100000;
</script>

<div class="grid grid-cols-5 bg-gray-100 font-bold">
  <div
    class="bg-white border-2 border-gray-300 h-22 flex justify-center flex-col items-center text-sm"
  >
    {#if totalPoint === 100000}
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
    <input type="hidden" name="id[]" value="{userScore.id}" />
    <input type="hidden" name="input[]" value="{userScore.input}" />
    <input type="hidden" name="score[]" value="{userScore.score}" />
    <div
      class="flex flex-col bg-white border-y-2 border-r-2 border-gray-300 p-[0.1rem] text-blue-800"
    >
      <button type="button">
        <div
          class="bg-blue-100 border-2 border-blue-300 h-14 rounded-lg flex flex-col justify-center"
        >
          <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">点数</div>
          <div class="flex justify-center">
            <span class="border-b-2 px-1">{userScore.input}</span>
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
