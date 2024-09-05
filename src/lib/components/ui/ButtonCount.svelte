<script lang="ts">
  import Button from "./Button.svelte";

  export let isSelected: boolean;
  export let count: number;
</script>

<Button on:click bind:isSelected>
  <slot />
  {#if isSelected}
    <div>
      <span>{count}</span>
      <span><slot name="countName" /></span>
    </div>
  {/if}
</Button>
