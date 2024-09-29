<script lang="ts">
  export let pattern:
    | "create"
    | "addScore"
    | "addChip"
    | "update"
    | "delete"
    | "close"
    | "liquidation"
    | "plus";
  export let size: "small" | "normal" = "normal";

  const buttonTexts = {
    create: "登録",
    addScore: "スコア",
    addChip: "チップ",
    update: "更新",
    delete: "削除",
    close: " 閉じる",
    liquidation: "登録",
    plus: "+",
  };

  const buttonStyles = {
    create: "primary",
    addScore: "primary",
    addChip: "primary",
    update: "primary",
    delete: "delete",
    close: "close",
    liquidation: "secondary",
    plus: "plus",
  };

  $: buttonText = buttonTexts[pattern];
  $: buttonStyle = buttonStyles[pattern];
  $: sizeClass = size === "small" ? "size-small" : "size-normal";
</script>

<div class="{pattern === 'plus' ? 'fixed bottom-24 right-10 z-10' : ''}">
  <button class="{buttonStyle} {sizeClass}" on:click>
    <div class="{pattern === 'plus' ? '-mt-[0.2rem]' : ''}">
      {buttonText}
    </div>
  </button>
</div>

<style>
  .close {
    @apply border border-gray-400 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md;
  }
  .primary {
    @apply bg-blue-800 text-white hover:bg-blue-900 rounded-md;
  }
  .secondary {
    @apply bg-yellow-500 text-white hover:bg-yellow-600 rounded-md;
  }
  .delete {
    @apply bg-red-500 text-white hover:bg-red-600 rounded-md;
  }
  .size-small {
    @apply font-bold w-32 h-10;
  }
  .size-normal {
    @apply font-bold w-56 h-10;
  }
  .plus {
    @apply w-14 h-14 text-2xl font-bold rounded-xl bg-blue-800 hover:bg-blue-900 text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105;
  }
</style>
