<script lang="ts">
  import { Input } from "flowbite-svelte";
  import type { Room } from "$lib/models/Total-Point/types.js";

  export let room: Room;

  let points: (number | null)[] = [null, null, null, null];
  let totalPoint = room.initialPoint * 4;

  let lastPoints: number[] = [0, 0, 0, 0];

  function handleInput(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    let value = target.value.replace(/^0+/, "").slice(0, 4);
    target.value = value;

    points[index] = value === "" ? null : parseInt(value);

    calculateRemainingPoints();
    calculateLastPoints();
  }

  function calculateRemainingPoints() {
    const userPoints = points.reduce((sum, point) => sum + (point || 0), 0);
    totalPoint = room.initialPoint * 4 - userPoints * 100;
  }

  function calculateLastPoints() {
    // ポイントから返し点を引く
    const adjustedPoints = points.map((point, index) =>
      point !== null ? point - room.users[index].returnPoint : null,
    );

    // null以外の値でソート
    const sortedIndices = adjustedPoints
      .map((point, index) => ({ point, index }))
      .filter((item) => item.point !== null)
      .sort((a, b) => (b.point || 0) - (a.point || 0))
      .map((item) => item.index);

    // オーダー配列
    const order = [30, 10, -10, -30];

    // lastPointsの計算
    lastPoints = points.map((_, index) => {
      if (adjustedPoints[index] === null) return 0;
      const sortedIndex = sortedIndices.indexOf(index);
      return sortedIndex !== -1
        ? (adjustedPoints[index] || 0) + order[sortedIndex]
        : 0;
    });
  }
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
              on:input="{(e) => handleInput(index, e)}"
              class="w-full text-right text-[1rem] pr-[1.3rem] py-1"
            />
            <span class="absolute right-2">00</span>
          </div>
        </div>
        <div class="text-center pb-1">{lastPoints[index]}</div>
      </div>
    {/each}
  </div>
</div>
