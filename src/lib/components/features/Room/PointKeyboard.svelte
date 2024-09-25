<script lang="ts">
  export let input: number = 0;
  export let isInput: boolean = false;

  function addDigit(digit: number) {
    const currentStr = Math.abs(input).toString();
    if (currentStr.length < 4) {
      if (input === 0) {
        input = digit;
      } else {
        input = Number(`${Math.abs(input)}${digit}`) * (input < 0 ? -1 : 1);
      }
    }
    // 4桁以上の場合は何もしない（入力を無視する）
  }

  function toggleSign() {
    input = -input;
  }

  function backspace() {
    input = Math.floor(Math.abs(input) / 10) * (input < 0 ? -1 : 1);
  }

  function calculate() {
    console.log("計算: ", input);
  }

  function close() {
    isInput = false;
  }
</script>

<div class="fixed bottom-0 left-0 right-0 z-10">
  <div class="bg-gray-100 font-bold p-2">
    <div class="grid grid-cols-2 gap-2">
      <div class=""></div>
      <div class="flex justify-between items-center h-10 space-x-2">
        <button
          on:click="{toggleSign}"
          class="flex-1 rounded-full bg-white py-1 px-2 border border-black"
          >+/-</button
        >
        <button
          on:click="{calculate}"
          class="flex-1 rounded bg-blue-100 py-1 px-2 border-2 border-blue-800 text-blue-800"
          >計算</button
        >
        <button
          on:click="{close}"
          class="flex-1 rounded bg-gray-200 py-1 px-2 border-2 border-gray-400 text-gray-700"
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
          class="flex justify-center items-center h-10 bg-white rounded-lg"
        >
          {i + 1}
        </button>
      {/each}
      <div class="flex justify-center items-center h-10 rounded-lg"></div>
      <button
        on:click="{() => addDigit(0)}"
        class="flex justify-center items-center h-10 bg-white rounded-lg"
      >
        0
      </button>
      <button
        on:click="{backspace}"
        class="flex justify-center items-center h-10 bg-white rounded-lg"
      >
        ☒
      </button>
    </div>
  </div>
</div>
