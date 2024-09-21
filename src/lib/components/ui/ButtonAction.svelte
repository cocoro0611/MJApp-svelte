<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  export let pattern:
    | "close"
    | "create"
    | "update"
    | "add"
    | "delete"
    | "deleteOnly"
    | "plus" = "create";

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close");
  };
  const handleCreate = () => {
    dispatch("create");
  };
  const handleUpdate = () => {
    dispatch("update");
  };
  const handleAdd = () => {
    dispatch("add");
  };
  const handleDelete = () => {
    dispatch("delete");
  };
</script>

{#if pattern === "close"}
  <button class="close defaultSize" on:click>閉じる</button>
{/if}

{#if pattern === "create"}
  <button class="action defaultSize" on:click>登録</button>
{/if}

{#if pattern === "update"}
  <button class="action defaultSize" on:click="{handleUpdate}">更新</button>
{/if}

{#if pattern === "add"}
  <button class="action defaultSize" on:click="{handleAdd}">追加</button>
{/if}

{#if pattern === "delete"}
  <button class="delete defaultSize" on:click="{handleDelete}">削除</button>
{/if}

{#if pattern === "plus"}
  <div class="fixed bottom-24 right-10 z-10">
    <Button
      class="w-14 h-14 text-2xl font-bold rounded-xl bg-blue-800 hover:bg-blue-900 text-white shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      on:click
    >
      <div class="-mt-[0.2rem]">+</div>
    </Button>
  </div>
{/if}

<style>
  .close {
    @apply border border-gray-400 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md;
  }
  .action {
    @apply bg-blue-800 text-white hover:bg-blue-900 rounded-md;
  }
  .delete {
    @apply bg-red-500 text-white hover:bg-red-600 rounded-md;
  }
  .defaultSize {
    @apply text-sm font-bold px-1 py-1 w-32 h-9;
  }
  .smallSize {
    @apply text-sm font-bold px-1 py-1 w-20 h-8;
  }
</style>
