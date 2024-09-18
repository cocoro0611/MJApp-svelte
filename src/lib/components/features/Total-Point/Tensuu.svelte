<script lang="ts">
  import { Input } from "flowbite-svelte";
  import type { Room, Score } from "$lib/models/Total-Point/types.js";
  import { onMount } from "svelte";

  export let room: Room;
  export let scores: Score[];
  export let scoreOrder: number;

  let totalPoint: number = room.initialPoint * 4;

  // ユーザーをorder順にソート
  $: sortedUsers = [...room.users].sort((a, b) => {
    const orderA = typeof a.order === "number" ? a.order : 0;
    const orderB = typeof b.order === "number" ? b.order : 0;
    return orderA - orderB;
  });

  // 現在のscoreOrderに対応するスコアを取得
  $: currentOrderScores = scores.filter(
    (score) => score.roomId === room.id && score.order === scoreOrder,
  );

  // 各ユーザーの現在のスコアを取得
  $: currentScores = sortedUsers.map((user) => {
    const userScore = currentOrderScores.find(
      (score) => score.userId === user.id,
    );
    return userScore ? userScore.score : null;
  });

  onMount(() => {
    // 必要に応じて初期化処理を行う
  });

  let method: string = "";
  let action: string = "";
  const handleCreate = () => {
    method = "POST";
    action = "?/createScore";
  };
  const handleUpdate = () => {
    method = "POST";
    action = "?/updateScore";
  };

  // totalPointの計算
  $: totalPoint =
    room.initialPoint * 4 -
    (currentScores?.reduce(
      (sum, score) => (sum ?? 0) + (score ?? 0) * 100,
      0,
    ) ?? 0);

  // umaの計算
  const bonusPoints: number[] = [
    Number(room.bonusPoint.slice(3, 5)),
    Number(room.bonusPoint.slice(0, 2)),
    -Number(room.bonusPoint.slice(0, 2)),
    -Number(room.bonusPoint.slice(3, 5)),
  ];

  // 各ユーザーのumaを計算
  $: userUma = currentScores
    .map((score, index) => ({
      index,
      value: score !== null ? (score - room.returnPoint / 100) / 10 : 0,
    }))
    .sort((a, b) => b.value - a.value)
    .map((item, sortedIndex) => ({
      ...item,
      value: item.value + bonusPoints[sortedIndex],
    }))
    .sort((a, b) => a.index - b.index)
    .map((item) => item.value);

  function handleInput(e: Event, index: number) {
    const target = e.target as HTMLInputElement | null;
    if (target) {
      currentScores[index] = Number(target.value.slice(0, 4));
    }
  }
</script>

<form {method} {action}>
  <div class="text-center">
    <div class="grid grid-cols-5 text-blue-800 border border-gray-400">
      <div
        class="flex flex-col items-center justify-center p-2 border border-gray-400"
      >
        <div class="text font-bold">-点数-</div>
        <div class="text-red-500">あと</div>
        <div class="text-red-500 font-bold">{totalPoint}</div>
      </div>
      {#each sortedUsers as user, index}
        <div class="flex flex-col border border-gray-400">
          <div
            class="border-2 border-blue-800 m-[0.1rem] rounded-md flex flex-col"
          >
            <div class="text-left text-xs pl-2 pt-1">点数</div>
            <div class="flex items-center justify-center p-1 relative">
              <Input
                type="number"
                name="score"
                bind:value="{currentScores[index]}"
                on:input="{(e) => handleInput(e, index)}"
                class="w-[4.2rem] text-right text-[0.9rem] pr-[1.4rem] py-1"
              />
              <span class="absolute right-[0.3rem] text-[0.9rem] mt-[0.1rem]"
                >00</span
              >
            </div>
          </div>
          <div
            class="text-center pb-1
            {userUma[index] >= 0 ? 'text-blue-500' : 'text-red-500'} 
          "
          >
            {userUma[index]}
          </div>
        </div>
        <input type="hidden" name="userId" value="{user.id}" />
      {/each}
    </div>
  </div>

  <input type="hidden" name="roomId" value="{room.id}" />
  <input type="hidden" name="scoreOrder" value="{scoreOrder}" />

  <button class="bg-slate-500 rounded-md w-20 p-4" on:click="{handleCreate}"
    >保存</button
  >

  <button class="bg-slate-500 rounded-md w-20 p-4" on:click="{handleUpdate}"
    >更新</button
  >
  {scoreOrder}
</form>
