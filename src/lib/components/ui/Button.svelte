<script lang="ts">
  export let type: "button1" | "button2" | "active" = "active";
  export let isSelected: boolean = false;
  export let isWide: boolean = false;
  export let isIcon: boolean = false;
</script>

{#if type === "button1"}
  <button class="primary px-1 py-1 w-32 h-10" on:click>
    <slot />
  </button>
{/if}

{#if type === "button2"}
  <button class="close px-1 py-1 w-32 h-10" on:click>
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
    @apply border border-blue-500 bg-blue-800 text-white hover:bg-blue-900 rounded-md;
  }
  .close {
    @apply border border-gray-400 bg-gray-100 text-gray-500 hover:bg-gray-200 rounded-md;
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
  .icon-size {
    @apply text-sm px-1 py-1 w-[3.9rem] h-[3.9rem];
  }
</style>
