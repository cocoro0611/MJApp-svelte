<script lang="ts">
  import type { ScoreData } from "$lib/models/Room/type.js";

  export let scores: ScoreData[];
  export let gameIndex: number;
  export let playerIndex: number;
  export let isInput: boolean = false;
  export let openKeyboard: (gameIndex: number, playerIndex: number) => void;

  $: currentScore = scores[gameIndex];
  $: activePlayerScore = currentScore?.playerScores[playerIndex];

  function updateScore(newScore: number) {
    if (!activePlayerScore) return;
    activePlayerScore.score = newScore;
    scores = [...scores];
  }

  function addDigit(digit: number) {
    if (!activePlayerScore) return;
    const currentInput = activePlayerScore.score ?? 0;
    const currentStr = Math.abs(currentInput).toString();
    if (currentStr.length < 4) {
      updateScore(
        currentInput === 0
          ? digit
          : Number(`${Math.abs(currentInput)}${digit}`) *
              (currentInput < 0 ? -1 : 1)
      );
    }
  }

  function toggleSign() {
    if (!activePlayerScore) return;
    updateScore(-(activePlayerScore.score ?? 0));
  }

  function backspace() {
    if (!activePlayerScore) return;
    const currentInput = activePlayerScore.score ?? 0;
    updateScore(
      Math.floor(Math.abs(currentInput) / 10) * (currentInput < 0 ? -1 : 1)
    );
  }

  function calculate() {
    if (!activePlayerScore) return;
    console.log("計算: ", activePlayerScore.score);
    activePlayerScore.point = activePlayerScore.score ?? 0;
    scores = [...scores];
    resetSelection();
  }

  function resetSelection() {
    isInput = false;
    gameIndex = -1;
    playerIndex = -1;
  }

  function movePlayer(direction: "left" | "right") {
    if (!currentScore) return;
    const newIndex =
      direction === "left"
        ? (playerIndex - 1 + currentScore.playerScores.length) %
          currentScore.playerScores.length
        : (playerIndex + 1) % currentScore.playerScores.length;
    openKeyboard(gameIndex, newIndex);
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
