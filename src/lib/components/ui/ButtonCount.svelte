<script lang="ts">
  import Button2 from "./Button2.svelte";

  export let isSelected: boolean;
  export let count: number;
</script>

<Button2 on:click bind:isSelected>
  <slot />
  {#if isSelected}
    <div>
      <span>{count}</span>
      <span><slot name="countName" /></span>
    </div>
  {/if}
</Button2>
