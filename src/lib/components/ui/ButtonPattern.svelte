<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let pattern: "default" | "update" | "delete" = "default";

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close");
  };
  const handleCreate = () => {
    dispatch("create");
  };
</script>

{#if pattern === "default"}
  <div class="flex justify-center mt-6 gap-2">
    <button class="close defaultSize" on:click="{handleClose}">閉じる</button>
    <button class="primary defaultSize" on:click="{handleCreate}">登録</button>
  </div>
{/if}

{#if pattern === "update"}
  <div class="flex justify-center mt-6 gap-2">
    <button class="close defaultSize" on:click>閉じる</button>
    <button class="primary defaultSize" on:click>更新</button>
  </div>
{/if}

{#if pattern === "delete"}
  <button class="delete smallSize" on:click>削除</button>
{/if}

<style>
  .primary {
    @apply border border-blue-800 bg-blue-800 text-white hover:bg-blue-900 rounded-md;
  }
  .close {
    @apply border border-gray-400 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-md;
  }
  .delete {
    @apply border border-red-500 bg-red-100 text-red-500 hover:bg-red-50 rounded-md;
  }
  .defaultSize {
    @apply text-sm font-bold px-1 py-1 w-32 h-9;
  }
  .smallSize {
    @apply text-sm font-bold px-1 py-1 w-20 h-8;
  }
</style>
