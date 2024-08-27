<script lang="ts">
  export let isSelected: boolean = false;
  export let type: "normal" | "wight" | "footer";
</script>

{#if type === "normal"}
  <button
    class:btn-primary="{!isSelected}"
    class:btn-primary-on="{isSelected}"
    on:click
  >
    <slot />
  </button>
{:else if type === "footer"}
  <button
    class:btn-footer-primary="{!isSelected}"
    class:btn-footer-primary-on="{isSelected}"
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
