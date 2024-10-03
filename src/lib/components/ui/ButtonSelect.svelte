<script lang="ts">
  export let width: "short" | "normal" | "long" = "normal";
  export let isSelected: boolean = false;
  export let count: number = 0;
  export let image: string = "";
</script>

<button
  type="button"
  class="p-1 {width}"
  class:btn-on="{isSelected && image === ''}"
  class:btn-off="{!isSelected && image === ''}"
  class:is-icon="{image !== ''}"
  class:icon-on="{isSelected && image !== ''}"
  class:icon-off="{!isSelected && image !== ''}"
  on:click
>
  <slot />
  {#if isSelected && count !== 0}
    <div>
      <span>{count}</span>
      <span><slot name="countName" /></span>
    </div>
  {/if}
  {#if image !== ""}
    <img class="w-8 h-8" src="/MemberIcon/{image}" alt="MemberIcon" />
  {/if}
</button>

<style>
  .short {
    @apply w-20 h-7 rounded-2xl text-sm;
  }
  .normal {
    @apply w-14 h-14 rounded text-[0.7rem];
  }
  .long {
    @apply w-32 h-8 rounded-2xl  text-sm;
  }
  .btn-on {
    @apply bg-blue-500 text-white hover:bg-blue-600;
  }
  .btn-off {
    @apply border border-blue-500 text-blue-500 bg-white hover:bg-blue-50;
  }
  .is-icon {
    @apply flex items-center justify-center w-12 h-12 rounded-full;
  }
  .icon-on {
    @apply bg-blue-300  hover:bg-blue-400;
  }
  .icon-off {
    @apply hover:bg-blue-50;
  }
</style>
