<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let isFuro: boolean;

  const dispatch = createEventDispatcher();
  const toggleFuro = (value: boolean) => {
    dispatch("toggle", value);
  };
</script>

<div class="flex font-bold text-sm">
  <button
    class="btn-left {isFuro ? 'btn-on' : 'btn-off'} "
    on:click="{() => toggleFuro(true)}"
  >
    門前
  </button>
  <button
    class="btn-right {isFuro ? 'btn-off' : 'btn-on'} "
    on:click="{() => toggleFuro(false)}"
  >
    副露
  </button>
</div>

<style>
  .btn-left {
    @apply px-4 rounded-l;
  }
  .btn-right {
    @apply px-4 rounded-r;
  }
  .btn-on {
    @apply bg-blue-500 text-white;
  }
  .btn-off {
    @apply bg-blue-900 text-gray-500;
  }
</style>
