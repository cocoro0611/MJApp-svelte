<script lang="ts">
  import type { ScoreData } from "$lib/models/Room/type.js";
  export let scores: ScoreData[];
  export let openKeyboard: (index: number) => void;
  export let activeScoreIndex: number;
  export let isInput: boolean;

  $: total =
    100000 -
    Number(scores[0].score) * 100 -
    Number(scores[1].score) * 100 -
    Number(scores[2].score) * 100 -
    Number(scores[3].score) * 100;

  $: sortedScores = scores.sort((a, b) => a.order - b.order);
</script>

<div class="grid grid-cols-5 bg-gray-100 font-bold">
  <div
    class="bg-white border-2 border-gray-300 h-22 flex justify-center flex-col items-center text-sm"
  >
    {#if total === 0}
      <div
        class="border-2 border-blue-300 p-2 rounded bg-blue-100 text-blue-800 w-16 flex justify-center items-center"
      >
        1 回戦
      </div>
    {/if}
    {#if total !== 0}
      <div>-点数-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500">{total}</div>
    {/if}
  </div>
  {#each sortedScores as score, index (score.id)}
    <div
      class="flex flex-col bg-white border-y-2 border-r-2 border-gray-300 p-[0.1rem] text-blue-800"
    >
      <button on:click="{() => openKeyboard(index)}">
        <div
          class="bg-blue-100 border-2 border-blue-300 h-14 rounded-lg flex flex-col justify-center"
          class:bg-yellow-100="{index === activeScoreIndex && isInput}"
          class:border-yellow-300="{index === activeScoreIndex && isInput}"
        >
          <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">点数</div>
          <div class="flex justify-center">
            <span
              class="border-b-2 px-1"
              class:border-blue-400="{index !== activeScoreIndex || !isInput}"
              class:border-yellow-400="{index === activeScoreIndex && isInput}"
              >{score.score}</span
            >
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
