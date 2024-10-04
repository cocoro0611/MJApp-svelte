<script lang="ts">
  export let type: "button" | "submit" = "button";

  export let inputType: "score" | "chip" = "score";
  export let totalValue: number = 0;
  export let count: number = 0;
</script>

{#if totalValue !== 0}
  <div class="text-center text-sm font-bold">
    {#if inputType === "score"}
      <div>-点数-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500">{totalValue}</div>
    {/if}
    {#if inputType === "chip"}
      <div>-チップ-</div>
      <div class="text-red-500">あと</div>
      <div class="text-red-500">{totalValue}</div>
    {/if}
  </div>
{/if}
{#if totalValue === 0}
  <button
    {type}
    class="flax justify-center items-center text-sm font-bold rounded-lg secondary h-12 w-16 p-1"
    on:click
  >
    {#if inputType === "score"}
      <div>{count} 回戦</div>
    {/if}
    {#if inputType === "chip"}
      <div>{count} 回分</div>
      <div class="text-[0.55rem]">( 1人/20枚 )</div>
    {/if}
  </button>
{/if}
