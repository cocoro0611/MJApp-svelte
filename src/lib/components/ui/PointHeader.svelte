<script lang="ts">
  import Icon from "./Icon.svelte";

  export let type: "han" | "fu";
  export let isFuro: boolean = false;

  function setFuro(value: boolean) {
    isFuro = value;
  }
</script>

<div class="h-[4.7rem] flex items-center justify-between px-4">
  {#if type === "han"}
    <div class="flex items-center">
      <button
        class="px-4 py-2 font-bold text-sm {isFuro
          ? 'bg-blue-500 text-white'
          : 'bg-blue-900 text-gray-500 '} 
            transition-colors duration-200 rounded-l-md"
        on:click="{() => setFuro(true)}"
      >
        門前
      </button>
      <button
        class="px-4 py-2 font-bold text-sm {isFuro
          ? 'bg-blue-900 text-gray-500 '
          : 'bg-blue-500 text-white '} 
            transition-colors duration-200 rounded-r-md"
        on:click="{() => setFuro(false)}"
      >
        副露
      </button>
    </div>
  {:else}
    <div class="h-10"></div>
  {/if}
  <button
    class="text-blue-300 hover:text-white transition-colors duration-200"
    on:click
    aria-label="リフレッシュ"
  >
    <Icon type="refresh" />
  </button>
</div>
