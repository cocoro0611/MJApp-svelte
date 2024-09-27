<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let isFuro: boolean;

  const dispatch = createEventDispatcher();
  const toggleFuro = (value: boolean) => {
    dispatch("toggle", value);
  };
</script>

<button
  class="px-4 py-2 font-bold text-sm {isFuro
    ? 'bg-blue-500 text-white'
    : 'bg-blue-900 text-gray-500'} 
  transition-colors duration-200 rounded-l-md"
  on:click="{() => toggleFuro(true)}"
>
  門前
</button>
<button
  class="px-4 py-2 font-bold text-sm {isFuro
    ? 'bg-blue-900 text-gray-500'
    : 'bg-blue-500 text-white'} 
  transition-colors duration-200 rounded-r-md"
  on:click="{() => toggleFuro(false)}"
>
  副露
</button>
