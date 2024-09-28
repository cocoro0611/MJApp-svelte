<script lang="ts">
  import {
    updateInput,
    addDigit,
    toggleSign,
    backspace,
  } from "$lib/utils/PointKeyboard.js";

  export let input = 0;

  export let isKeyboard: boolean = false;
  const closeKeyboard = () => {
    isKeyboard = false;
  };

  export let method: string = "";
  export let action: string = "";
  const updateScore = () => {
    method = "POST";
    action = "?/updateScore";
  };

  // FIXME: 関数のリファクタリングが必要
  function keyboardInput(newInput: number) {
    input = updateInput(input, newInput);
  }
</script>

<div class="fixed bottom-0 left-0 right-0 z-10">
  <div class="max-w-screen-lg container mx-auto">
    <div class="bg-gray-100 font-bold p-2">
      <div class="grid grid-cols-5 gap-2">
        <div class="col-span-1 flex justify-start items-center h-10 space-x-2">
          <button
            class="flex-1 rounded-full bg-white py-1 px-2 border border-black hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
          >
            ←
          </button>
          <button
            class="flex-1 rounded-full bg-white py-1 px-2 border border-black hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
          >
            →
          </button>
        </div>
        <div
          class="col-span-1 flex justify-start items-center h-10 space-x-2"
        ></div>
        <div class="col-span-3 flex justify-end items-center h-10 space-x-2">
          <button
            on:click="{() => keyboardInput(toggleSign(input))}"
            class="flex-1 rounded-full bg-white py-1 px-2 border border-black hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
          >
            +/-
          </button>
          <button
            on:click="{updateScore}"
            class="flex-1 rounded bg-blue-100 py-1 px-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-200 active:bg-blue-300 transition duration-150 ease-in-out"
          >
            計算
          </button>
          <button
            on:click="{closeKeyboard}"
            class="flex-1 rounded bg-gray-200 py-1 px-2 border-2 border-gray-400 text-gray-700 hover:bg-gray-300 active:bg-gray-400 transition duration-150 ease-in-out"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>

    <div class="bg-gray-300 text-2xl font-bold text-gray-500 p-2 pb-14">
      <div class="grid grid-cols-3 gap-2">
        {#each Array(9) as _, i}
          <button
            on:click="{() => keyboardInput(addDigit(input, i + 1))}"
            class="flex justify-center items-center h-10 bg-white rounded-lg hover:bg-gray-100 active:bg-gray-200 transition duration-150 ease-in-out"
          >
            {i + 1}
          </button>
        {/each}
        <div class="flex justify-center items-center h-10 rounded-lg"></div>
        <button
          on:click="{() => keyboardInput(addDigit(input, 0))}"
          class="flex justify-center items-center h-10 bg-white rounded-lg hover:bg-gray-100 active:bg-gray-200 transition duration-150 ease-in-out"
        >
          0
        </button>
        <button
          on:click="{() => keyboardInput(backspace(input))}"
          class="flex justify-center items-center h-10 bg-white rounded-lg hover:bg-gray-100 active:bg-gray-200 transition duration-150 ease-in-out"
        >
          ☒
        </button>
      </div>
    </div>
  </div>
</div>
