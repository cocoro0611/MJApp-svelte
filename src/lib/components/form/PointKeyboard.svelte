<script lang="ts">
  import {
    addDigit,
    toggleSign,
    backspace,
  } from "$lib/utils/point-keyboard.js";

  export let inputType: "score" | "chip";

  export let inputValues: Record<string, number> = {};
  export let selectedScoreId: string | null = null;
  export let selectedChipId: string | null = null;
  export let openKeyboard = false;
  export let navigate: (direction: "left" | "right") => void = () => {};

  const closeKeyboard = () => {
    openKeyboard = false;
    selectedScoreId = null;
    selectedChipId = null;
  };

  function updateSelectedScore(updater: (value: number) => number) {
    if (selectedScoreId) {
      inputValues[selectedScoreId] = updater(inputValues[selectedScoreId] || 0);
    }
    if (selectedChipId) {
      inputValues[selectedChipId] = updater(inputValues[selectedChipId] || 0);
    }
  }

  const handleAddDigit = (digit: number) =>
    updateSelectedScore((value) => addDigit(value, digit, inputType));
  const handleToggleSign = () => updateSelectedScore(toggleSign);
  const handleBackspace = () => updateSelectedScore(backspace);

  const leftButton = () => navigate("left");
  const rightButton = () => navigate("right");
</script>

<div class="fixed bottom-0 left-0 right-0 z-10">
  <div class="max-w-screen-lg container mx-auto">
    <div class="bg-gray-100 p-2 font-bold">
      <div class="grid grid-cols-5 gap-2">
        <div class="col-span-1 flex justify-center items-center gap-2">
          <button
            type="button"
            on:click="{leftButton}"
            class=" flex-auto keyboard-btn option-action"
          >
            <!-- 調整 -->
            <div class="-mt-[0.11rem]">←</div>
          </button>
          <button
            type="button"
            on:click="{rightButton}"
            class="flex-auto keyboard-btn option-action"
          >
            <!-- 調整 -->
            <div class="-mt-[0.11rem]">→</div>
          </button>
        </div>
        <div class="col-span-1 h-8"></div>
        <div class="col-span-3 flex justify-center items-center gap-2">
          <button
            type="button"
            on:click="{handleToggleSign}"
            class="flex-auto keyboard-btn option-action"
          >
            <!-- 調整 -->
            <div class="-mt-[0.2rem]">+/-</div>
          </button>
          <button type="submit" class="flex-auto primary rounded h-8 w-12">
            計算
          </button>
          <button
            type="button"
            class="flex-auto cancel rounded h-8 w-12"
            on:click="{closeKeyboard}">閉じる</button
          >
        </div>
      </div>
    </div>
    <div class="bg-gray-300 p-2 pb-14">
      <div class="grid grid-cols-3 gap-2">
        {#each Array(9) as _, i}
          <button
            type="button"
            on:click="{() => handleAddDigit(i + 1)}"
            class="keyboard-btn option-number"
          >
            {i + 1}
          </button>
        {/each}
        <div></div>
        <button
          type="button"
          on:click="{() => handleAddDigit(0)}"
          class="keyboard-btn option-number"
        >
          0
        </button>
        <button
          type="button"
          on:click="{handleBackspace}"
          class="keyboard-btn option-number"
        >
          ☒
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .keyboard-btn {
    @apply bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-500;
    @apply text-2xl;
  }
  .option-action {
    @apply border-2 border-gray-400 rounded-full h-8;
  }
  .option-number {
    @apply text-2xl rounded h-10;
  }
</style>
