<script lang="ts">
  export let isLeftLong: boolean = false;
</script>

<header
  class="fixed top-0 left-0 right-0
   bg-primary text-primary font-bold text-xl"
>
  <div class="max-w-screen-lg container mx-auto grid grid-cols-6 pt-12 pb-4">
    <div
      class="flex justify-center"
      class:col-span-3="{isLeftLong}"
      class:col-span-1="{!isLeftLong}"
    >
      <slot name="left" />
    </div>
    <div
      class="flex justify-center"
      class:col-span-2="{isLeftLong}"
      class:col-span-4="{!isLeftLong}"
    >
      <slot name="center" />
    </div>
    <div
      class="flex justify-center
      col-span-1"
    >
      <slot name="right" />
    </div>
  </div>
</header>

<div class="fixed top-[5.8rem] left-0 right-0">
  <div class="max-w-screen-lg container mx-auto">
    <slot />
  </div>
</div>
