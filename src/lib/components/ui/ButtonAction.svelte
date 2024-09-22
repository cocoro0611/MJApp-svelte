<script lang="ts">
  export let pattern: "create" | "update" | "delete" | "plus";
  // export let pattern:
  //   | "close"
  //   | "create"
  //   | "update"
  //   | "add"
  //   | "delete"
  //   | "deleteOnly"
  //   | "plus" = "create";

  const buttonTexts = {
    create: "登録",
    update: "更新",
    delete: "削除",
    plus: "+",
  };

  const buttonStyles = {
    create: "primary",
    update: "primary",
    delete: "delete",
    plus: "plus",
  };

  $: buttonText = buttonTexts[pattern];
  $: buttonStyle = buttonStyles[pattern];
</script>

<div class="{pattern === 'plus' ? 'fixed bottom-24 right-10 z-10' : ''}">
  <button class="{buttonStyle}" on:click>
    <div class="{pattern === 'plus' ? '-mt-[0.2rem]' : ''}">
      {buttonText}
    </div>
  </button>
</div>

<!-- {#if pattern === "close"}
  <button class="close defaultSize" on:click>閉じる</button>
{/if}

{#if pattern === "add"}
  <button class="action defaultSize" on:click="{handleAdd}">追加</button>
{/if}

{#if pattern === "delete"}
  <button class="delete defaultSize" on:click="{handleDelete}">削除</button>
{/if} -->
<style>
  .close {
    @apply border border-gray-400 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md;
    @apply font-bold w-56 h-10;
  }
  .primary {
    @apply bg-blue-800 text-white hover:bg-blue-900 rounded-md;
    @apply font-bold w-56 h-10;
  }
  .delete {
    @apply bg-red-500 text-white hover:bg-red-600 rounded-md;
    @apply font-bold w-56 h-10;
  }
  .plus {
    @apply w-14 h-14 text-2xl font-bold rounded-xl bg-blue-800 hover:bg-blue-900 text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105;
  }
</style>
