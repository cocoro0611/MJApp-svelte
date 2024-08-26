<script lang="ts">
  export let isSelected: boolean = false;
  export let type: "normal" | "wight";
</script>

{#if type === "normal"}
  <button
    class:btn-primary="{!isSelected}"
    class:btn-primary-on="{isSelected}"
    on:click
  >
    <slot />
  </button>
{:else}
  <button
    class:btn-wight-primary="{!isSelected}"
    class:btn-wight-primary-on="{isSelected}"
    on:click
  >
    <slot />
  </button>
{/if}
