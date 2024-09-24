<script lang="ts">
  export let image: string;
  export let name: string;
  export let totalScore: number = 0;
  export let size: "small" | "normal" | "large" = "normal";
  export let isScore: boolean = false;
  export let isColor: boolean = true;
</script>

<button
  class="
    {size === 'small'
    ? 'w-16 h-16'
    : size === 'normal'
      ? 'w-20 h-20'
      : 'w-40 h-40'}
    {isColor ? 'border-2 border-blue-300 bg-blue-100 rounded' : ''}
    text-blue-500 font-bold flex flex-col items-center justify-center
  "
  on:click
>
  <img
    class="{size === 'small'
      ? 'w-8 h-8'
      : size === 'normal'
        ? 'w-12 h-12'
        : 'w-24 h-24'}"
    src="{image}"
    alt="MemberIcon"
  />
  <div
    class="
    {size === 'small'
      ? 'text-xs mt-1'
      : size === 'normal'
        ? 'text-sm mt-1'
        : 'text-2xl mt-2'}
    text-center
  "
  >
    {name}
  </div>
  {#if isScore}
    <div class="text-sm text-center {totalScore >= 0 ? '' : 'text-red-500'}">
      {totalScore}
    </div>
  {/if}
</button>
