<script lang="ts">
  export let type: "button" | "submit" = "button";
  export let isColor: boolean = true;
  export let size: "small" | "normal" | "large" = "normal";

  export let name: string = "";
  export let image: string = "";

  export let isScore: boolean = false;
  export let totalScore: number = 0;

  export let isSelectAction: boolean = false;
  export let isSelected: boolean = false;
</script>

<button
  {type}
  class="rounded font-bold flex justify-center items-center flex-col"
  class:secondary="{!isSelectAction && isColor}"
  class:btn-off="{isSelectAction && !isSelected}"
  class:btn-on="{isSelectAction && isSelected}"
  class:small-size="{size === 'small'}"
  class:normal-size="{size === 'normal'}"
  class:large-size="{size === 'large'}"
  on:click
>
  <img
    class=""
    class:small-img="{size === 'small'}"
    class:normal-img="{size === 'normal'}"
    class:large-img="{size === 'large'}"
    src="/MemberIcon/{image}"
    alt="MemberIcon"
  />
  <div
    class="text-center"
    class:small-text="{size === 'small'}"
    class:normal-text="{size === 'normal'}"
    class:large-text="{size === 'large'}"
  >
    {name}
  </div>
  {#if isScore}
    <div
      class="text-sm text-center"
      class:text-blue-500="{totalScore >= 0}"
      class:text-red-500="{totalScore < 0}"
    >
      {totalScore}
    </div>
  {/if}
</button>

<style>
  .btn-on {
    @apply bg-blue-300  hover:bg-blue-400 active:bg-blue-500;
  }
  .btn-off {
    @apply hover:bg-blue-50 active:bg-blue-100;
  }
  .small-size {
    @apply w-16 h-16;
  }
  .normal-size {
    @apply w-20 h-20;
  }
  .large-size {
    @apply w-40 h-40;
  }
  .small-img {
    @apply w-8 h-8;
  }
  .normal-img {
    @apply w-12 h-12;
  }
  .large-img {
    @apply w-24 h-24;
  }
  .small-text {
    @apply text-xs;
  }
  .normal-text {
    @apply text-sm mt-1;
  }
  .large-text {
    @apply text-2xl mt-3;
  }
</style>
