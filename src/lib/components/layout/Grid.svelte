<script lang="ts">
  export let firstContent: Boolean = false;
  export let rightContentes: any[] = [];
</script>

<div
  class="grid grid-cols-5
  {firstContent ? '' : '-mt-[0.1rem]'}"
>
  <div class="h-22 flex justify-center items-center border-2 border-gray-300">
    <slot name="leftContent" />
  </div>
  {#each rightContentes as rightContent}
    <div class="flex flex-col border-y-2 border-r-2 border-gray-300 p-[0.1rem]">
      <slot name="rightContent" {rightContent} />
    </div>
  {/each}
</div>
