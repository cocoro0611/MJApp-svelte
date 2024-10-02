<script lang="ts">
  export let type: "button" | "submit" = "button";
  export let disabled = false;
  export let variant: "primary" | "delete" | "close" | "plus" = "primary";
  export let isLine = false;
</script>

{#if variant !== "plus"}
  <button
    {type}
    {disabled}
    class="{variant} {disabled ? 'disabled' : ''} 
    {isLine ? 'small' : 'normal'} "
    on:click
  >
    <slot />
  </button>
{/if}

{#if variant === "plus"}
  <div class="fixed bottom-24 right-10 z-10">
    <button
      {type}
      {disabled}
      class="{variant} {disabled ? 'disabled' : ''} "
      on:click>+</button
    >
  </div>
{/if}

<style>
  .primary {
    @apply bg-blue-800 text-white hover:bg-blue-900 rounded-md;
  }
  .delete {
    @apply bg-red-500 text-white hover:bg-red-600 rounded-md;
  }
  .close {
    @apply border border-gray-400 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-md;
  }
  .small {
    @apply font-bold w-32 h-10;
  }
  .normal {
    @apply font-bold  w-[17rem] h-10;
  }
  .plus {
    @apply flex items-center justify-center w-14 h-14 text-3xl font-bold rounded-xl bg-blue-800 hover:bg-blue-900 text-white;
  }
  .disabled {
    @apply opacity-50 cursor-not-allowed;
  }
</style>
