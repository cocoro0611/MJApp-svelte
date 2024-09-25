<script lang="ts">
  import type { ScoreData } from "$lib/models/Room/type.js";
  export let scores: ScoreData[];
  export let input: number = 0;

  let total: number = 100000;

  const sortedScores = scores.sort((a, b) => a.order - b.order);
</script>

<div class="grid grid-cols-5 bg-gray-100 font-bold">
  <div
    class="bg-white border-2 border-gray-300 h-22 flex justify-center flex-col items-center text-sm"
  >
    <div>-点数-</div>
    <div class="text-red-500">あと</div>
    <div class="text-red-500">{total}</div>
  </div>
  {#each sortedScores as score}
    <div
      class="flex flex-col bg-white border-y-2 border-r-2 border-gray-300 p-[0.1rem] text-blue-800"
    >
      <button on:click>
        <div
          class="bg-blue-100 border-2 border-blue-300 h-14 rounded-lg flex flex-col justify-center"
        >
          <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">点数</div>
          <div class="flex justify-center">
            <span class="border-b-2 border-blue-400 px-1">{input}</span>
            <span>00</span>
          </div>
        </div>
      </button>
      <div
        class="flex justify-center text-sm"
        class:text-red-500="{score.point < 0}"
      >
        {score.point}
      </div>
    </div>
  {/each}
</div>
