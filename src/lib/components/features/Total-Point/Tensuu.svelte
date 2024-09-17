<script lang="ts">
  import { Input } from "flowbite-svelte";
  import type { Room, Score } from "$lib/models/Total-Point/types.js";

  export let room: Room;
  export let scores: Score[];

  let points: (number | null)[] = [400, 300, 200, 100];
  let totalPoint = 100000;

  let lastPoints: number = 0;

  $: filteredScores = scores.filter(
    (score) =>
      score.roomId === room.id &&
      room.users.some((user) => user.id === score.userId),
  );
</script>

<div class="text-center">
  <div class="grid grid-cols-5 text-blue-800 border border-gray-400">
    <div
      class="flex flex-col items-center justify-center p-2 border border-gray-400"
    >
      <div class="text font-bold">-点数-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500 font-bold">{totalPoint}</div>
    </div>
    {#each points as point, index}
      <div class="flex flex-col border border-gray-400">
        <div
          class="border-2 border-blue-800 m-[0.1rem] rounded-md flex flex-col"
        >
          <div class="text-left text-xs pl-2 pt-1">点数</div>
          <div class="flex items-center justify-center p-1 relative">
            <Input
              type="number"
              value="{point === null ? '' : point}"
              on:input
              class="w-[4.2rem] text-right text-[0.9rem] pr-[1.5rem] py-1"
            />
            <span class="absolute right-2 text-[0.9rem]">00</span>
          </div>
        </div>
        <div class="text-center pb-1">{lastPoints}</div>
      </div>
    {/each}
  </div>
</div>
{#each filteredScores as score}
  <div>
    Score: {score.score}
  </div>
{/each}

{#each room.users as user}
  <button class="border-2 border-blue-800 h-auto w-auto rounded-md m-[0.1rem]">
    <div class="flex items-center justify-center">
      {user.name}
    </div>
  </button>
{/each}

ううう:300 あああ:200 えええ:100 いいい:400
