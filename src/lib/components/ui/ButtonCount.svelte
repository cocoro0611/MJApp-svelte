<script lang="ts">
  import Button2 from "./Button2.svelte";

  export let isSelected: boolean;
  export let count: number;
  export let maxCount: number;

  const countButton = () => {
    count += 1;
    isSelected = true;
    if (count > maxCount) {
      count = 0;
      isSelected = false;
    }
  };
</script>

<Button2 on:click="{countButton}" bind:isSelected>
  <slot />
  {#if isSelected}
    <div>
      <span>{count}</span>
      <span><slot name="countName" /></span>
    </div>
  {/if}
</Button2>
