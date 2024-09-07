<script lang="ts">
  export let isSelected: boolean = false;
  export let isWide: boolean = false;
  export let isCustom: boolean = false;
</script>

<button
  class="
    {isSelected ? 'btn-on' : 'btn-off'} 
    {isWide ? 'wide-size' : 'delault-size'} 
    {isCustom ? 'custom-size' : 'delault-size'} "
  on:click
>
  <slot />
</button>

<style>
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
