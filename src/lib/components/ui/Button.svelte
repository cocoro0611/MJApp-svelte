<script lang="ts">
  export let type: "button" | "active" = "active";
  export let color: "primary" | "close" | "delete" = "primary";
  export let isSelected: boolean = false;
  export let isWide: boolean = false;
  export let isCustom: boolean = false;
</script>

{#if type === "button"}
  <button class="{color}" on:click>
    <slot />
  </button>
{/if}

{#if type === "active"}
  <button
    class="
    {isSelected ? 'btn-on' : 'btn-off'} 
    {isWide ? 'wide-size' : 'delault-size'} 
    {isCustom ? 'custom-size' : 'delault-size'} "
    on:click
  >
    <slot />
  </button>
{/if}

<style>
  .primary {
    @apply border border-blue-800 bg-blue-800 text-white hover:bg-blue-900 rounded-md;
    @apply px-1 py-1 w-32 h-10;
  }
  .close {
    @apply border border-gray-400 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-md;
    @apply px-1 py-1 w-32 h-10;
  }
  .delete {
    @apply border border-red-500 bg-red-100 text-red-500 hover:bg-red-50 rounded-md;
    @apply text-sm px-1 py-1 w-20 h-8;
  }
  .btn-on {
    @apply border border-blue-500 bg-blue-500 text-white hover:bg-blue-400;
  }
  .btn-off {
    @apply border border-blue-500 bg-white text-blue-500 hover:bg-blue-50;
  }
  .delault-size {
    @apply text-[0.7rem] px-1 py-1 w-14 h-14 rounded-md;
    word-break: break-all;
  }
  .wide-size {
    @apply text-sm px-1 py-1 w-32 h-8 rounded-2xl;
  }
  .custom-size {
    @apply text-[0.8rem] px-1 py-1 w-20 h-7 rounded-2xl;
  }
  .icon-size {
    @apply text-sm px-1 py-1 w-[3.9rem] h-[3.9rem];
  }
</style>
