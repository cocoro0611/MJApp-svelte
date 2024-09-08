<script lang="ts">
  import { Input } from "flowbite-svelte";

  let points: number[] = [0, 0, 0, 0];
  let remainingPoints = 100000;

  function handleInput(index: number, value: string) {
    const numValue = parseInt(value) || 0;
    points[index] = numValue;
    calculateRemainingPoints();
  }

  function calculateRemainingPoints() {
    const totalPoints = points.reduce((sum, point) => sum + point, 0);
    remainingPoints = 100000 - totalPoints;
  }
</script>

<div class="text-center">
  <div class="grid grid-cols-5 text-blue-800 border border-gray-300">
    <div class="flex flex-col items-center justify-center p-2">
      <div class="text-lg font-bold">-点数-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500 text-xl font-bold">{remainingPoints}</div>
    </div>
    {#each points as point, index}
      <div class="border border-blue-800 m-1 rounded-md flex flex-col">
        <div class="text-left text-xs pl-2 pt-1">点数</div>
        <div class="flex items-center justify-center p-1 relative">
          <Input
            type="number"
            value="{point}"
            on:input="{(e) => handleInput(index, e.currentTarget.value)}"
            class="w-full text-right pr-8 py-1"
          />
          <span class="absolute right-2">00</span>
        </div>
        <div class="text-center pb-1">{point}</div>
      </div>
    {/each}
  </div>
</div>
