<script lang="ts">
  import type { ScoreData } from "$lib/models/Room/type.js";
  import { createEventDispatcher } from "svelte";

  export let scores: ScoreData[];
  export let count: number;
  export let userId: string;
  export let openKeyboard: (count: number, userId: string) => void;

  const dispatch = createEventDispatcher();

  $: activeScore = scores.find(
    (score) => score.count === count && score.userId === userId
  );

  function updateScore(newInput: number) {
    if (!activeScore) return;
    const updatedScores = scores.map((score) =>
      score.count === count && score.userId === userId
        ? { ...score, input: newInput, score: Math.floor(newInput / 10) }
        : score
    );
    dispatch("update", updatedScores);
  }

  function addDigit(digit: number) {
    if (!activeScore) return;
    const currentInput = activeScore.input ?? 0;
    const currentStr = Math.abs(currentInput).toString();
    if (currentStr.length < 4) {
      const newInput =
        currentInput === 0
          ? digit
          : Number(`${Math.abs(currentInput)}${digit}`) *
            (currentInput < 0 ? -1 : 1);
      updateScore(newInput);
    }
  }

  function toggleSign() {
    if (!activeScore) return;
    updateScore(-(activeScore.input ?? 0));
  }

  function backspace() {
    if (!activeScore) return;
    const currentInput = activeScore.input ?? 0;
    const newInput =
      Math.floor(Math.abs(currentInput) / 10) * (currentInput < 0 ? -1 : 1);
    updateScore(newInput);
  }

  function calculate() {
    if (!activeScore) return;
    const input = activeScore.input ?? 0;
    const score = Math.floor(input / 10);
    const updatedScores = scores.map((s) =>
      s.count === count && s.userId === userId ? { ...s, input, score } : s
    );
    dispatch("update", updatedScores);
    resetSelection();
  }

  function resetSelection() {
    dispatch("reset");
  }

  function movePlayer(direction: "left" | "right") {
    if (!activeScore) return;
    const currentRoundScores = scores.filter((score) => score.count === count);
    const currentIndex = currentRoundScores.findIndex(
      (score) => score.userId === userId
    );
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + currentRoundScores.length) %
          currentRoundScores.length
        : (currentIndex + 1) % currentRoundScores.length;
    openKeyboard(count, currentRoundScores[newIndex].userId);
  }
</script>

<div class="fixed bottom-0 left-0 right-0 z-10">
  <div class="max-w-screen-lg container mx-auto">
    <div class="bg-gray-100 font-bold p-2">
      <div class="grid grid-cols-5 gap-2">
        <div class="col-span-1 flex justify-start items-center h-10 space-x-2">
          <button
            on:click="{() => movePlayer('left')}"
            class="flex-1 rounded-full bg-white py-1 px-2 border border-black hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
            >←</button
          >
          <button
            on:click="{() => movePlayer('right')}"
            class="flex-1 rounded-full bg-white py-1 px-2 border border-black hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
            >→</button
          >
        </div>
        <div
          class="col-span-1 flex justify-start items-center h-10 space-x-2"
        ></div>
        <div class="col-span-3 flex justify-end items-center h-10 space-x-2">
          <button
            on:click="{toggleSign}"
            class="flex-1 rounded-full bg-white py-1 px-2 border border-black hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
            >+/-</button
          >
          <button
            on:click="{calculate}"
            class="flex-1 rounded bg-blue-100 py-1 px-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-200 active:bg-blue-300 transition duration-150 ease-in-out"
            >計算</button
          >
          <button
            on:click="{resetSelection}"
            class="flex-1 rounded bg-gray-200 py-1 px-2 border-2 border-gray-400 text-gray-700 hover:bg-gray-300 active:bg-gray-400 transition duration-150 ease-in-out"
            >閉じる</button
          >
        </div>
      </div>
    </div>

    <div class="bg-gray-300 text-2xl font-bold text-gray-500 p-2 pb-14">
      <div class="grid grid-cols-3 gap-2">
        {#each Array(9) as _, i}
          <button
            on:click="{() => addDigit(i + 1)}"
            class="flex justify-center items-center h-10 bg-white rounded-lg hover:bg-gray-100 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            {i + 1}
          </button>
        {/each}
        <div class="flex justify-center items-center h-10 rounded-lg"></div>
        <button
          on:click="{() => addDigit(0)}"
          class="flex justify-center items-center h-10 bg-white rounded-lg hover:bg-gray-100 active:bg-gray-200 transition duration-150 ease-in-out"
        >
          0
        </button>
        <button
          on:click="{backspace}"
          class="flex justify-center items-center h-10 bg-white rounded-lg hover:bg-gray-100 active:bg-gray-200 transition duration-150 ease-in-out"
        >
          ☒
        </button>
      </div>
    </div>
  </div>
</div>
