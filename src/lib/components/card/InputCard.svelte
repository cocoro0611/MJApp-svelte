<script lang="ts">
  export let type: "button" | "submit" = "button";

  export let inputType: "score" | "chip" = "score";
  export let isSelected: boolean = false;

  export let inputValue: number = 0;
</script>

<button
  {type}
  class="flax justify-center font-bold rounded-lg h-14"
  class:secondary="{!isSelected}"
  class:select-card="{isSelected}"
  on:click
>
  <div class="flex justify-start text-[0.6rem] pl-2 -mt-1">
    {#if inputType === "score"}
      点数
    {/if}
    {#if inputType === "chip"}
      枚数
    {/if}
  </div>
  <div class="flex justify-center">
    <span
      class="border-b-2 px-1"
      class:border-blue-300="{!isSelected}"
      class:border-yellow-300="{isSelected}"
    >
      {inputValue}
    </span>
    <span>
      {#if inputType === "score"}
        00
      {/if}
      {#if inputType === "chip"}
        枚
      {/if}
    </span>
  </div>
</button>

<style>
  .select-card {
    @apply bg-yellow-100 border-2 border-yellow-300  text-yellow-800;
  }
</style>
