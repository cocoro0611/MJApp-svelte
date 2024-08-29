<script lang="ts">
  export let type: "button" | "active" = "active";
  export let isSelected: boolean = false;
  export let isWide: boolean = false;
  export let isIcon: boolean = false;
</script>

{#if type === "button"}
  <button class="primary text-sm px-1 py-1 w-36 h-10 font-bold" on:click>
    <slot />
  </button>
{/if}

{#if type === "active"}
  <button
    class="
    {isSelected ? 'btn-on' : 'btn-off'} 
    {isWide ? 'wide-size' : 'delault-size'} 
    {isIcon ? 'icon-size' : ''}"
    on:click
  >
    {#if $$slots.icon}
      <div class="flex justify-center">
        <slot name="icon" />
      </div>
    {/if}
    <slot />
  </button>
{/if}

<style>
  .primary {
    @apply border border-blue-500 bg-blue-800 text-white hover:bg-blue-700 rounded-md;
  }
  .btn-on {
    @apply border border-blue-500 bg-blue-500 text-white hover:bg-blue-400 rounded-md;
  }
  .btn-off {
    @apply border border-blue-500 bg-white text-blue-500 hover:bg-blue-50 rounded-md;
  }
  .delault-size {
    @apply text-sm px-1 py-1 w-14 h-14;
    word-break: break-all;
  }
  .wide-size {
    @apply text-sm px-1 py-1 w-32 h-10;
  }
  .icon-size {
    @apply text-sm px-1 py-1 w-20 h-20;
  }
</style>
