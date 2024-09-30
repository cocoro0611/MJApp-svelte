<script lang="ts">
  export let isLeftLong: boolean = false;
</script>

<header
  class="fixed top-0 left-0 right-0 bg-blue-800 text-white font-bold text-xl"
>
  <div class="max-w-screen-lg container mx-auto grid grid-cols-6">
    <div
      class="{isLeftLong
        ? 'col-span-4 pl-4'
        : 'col-span-1 justify-center py-6'} 
      flex items-center"
    >
      <slot name="left" />
    </div>
    <div
      class="{isLeftLong ? 'col-span-1' : 'col-span-4'}
      py-6 flex justify-center items-center"
    >
      <slot name="center" />
    </div>
    <div class="col-span-1 py-6 flex justify-center items-center">
      <slot name="right" />
    </div>
  </div>
</header>

<div class="fixed top-20 left-0 right-0">
  <div class="max-w-screen-lg container mx-auto">
    <slot />
  </div>
</div>
