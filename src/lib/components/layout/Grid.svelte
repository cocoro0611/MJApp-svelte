<script lang="ts">
  export let firstContent: Boolean = false;
  export let rightContentes: any[] = [];

  export let isPrimaryGrid: boolean = false;
</script>

<div
  class="grid grid-cols-5
  {firstContent ? '' : '-mt-[0.1rem]'}"
>
  <div class="grid-left" class:grid-primary-color="{isPrimaryGrid}">
    <slot name="leftContent" />
  </div>
  {#each rightContentes as rightContent}
    <div class="grid-rigth" class:grid-primary-color="{isPrimaryGrid}">
      <slot name="rightContent" {rightContent} />
    </div>
  {/each}
</div>

<style>
  .grid-left {
    @apply flex justify-center items-center border-2 border-gray-300;
  }
  .grid-rigth {
    @apply flex flex-col border-y-2 border-r-2 border-gray-300 p-[0.1rem];
  }
  .grid-primary-color {
    @apply bg-blue-800 text-white;
  }
</style>
