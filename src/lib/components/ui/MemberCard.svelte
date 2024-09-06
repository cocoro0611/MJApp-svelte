<script lang="ts">
</script>

<button class="btn-off text-sm px-1 py-1 w-20 h-20 font-bold" on:click>
  <slot />
</button>

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
    @apply text-[0.7rem] px-1 py-1 w-14 h-14;
    word-break: break-all;
  }
  .wide-size {
    @apply text-sm px-1 py-1 w-32 h-10;
  }
  .icon-size {
    @apply text-sm px-1 py-1 w-20 h-20;
  }
</style>
