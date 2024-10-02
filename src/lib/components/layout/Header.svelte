<script lang="ts">
  export let isLeftLong: boolean = false;
</script>

<header
  class="fixed top-0 left-0 right-0 bg-blue-800 text-white font-bold text-xl"
>
  <div class="max-w-screen-lg container mx-auto grid grid-cols-6">
    <div
      class="{isLeftLong
        ? 'col-span-4 pl-4 pt-12 pb-4'
        : 'col-span-1 justify-center pt-12 pb-4'} 
      flex"
    >
      <slot name="left" />
    </div>
    <div
      class="{isLeftLong ? 'col-span-1' : 'col-span-4'}
      pt-12 pb-4 flex justify-center"
    >
      <slot name="center" />
    </div>
    <div class="col-span-1 pt-12 pb-4 flex justify-center">
      <slot name="right" />
    </div>
  </div>
</header>

<div class="fixed top-24 left-0 right-0">
  <div class="max-w-screen-lg container mx-auto">
    <slot />
  </div>
</div>
