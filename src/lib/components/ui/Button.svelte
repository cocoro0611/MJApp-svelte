<script lang="ts" context="module">
  export type Variant = "primary" | "secondary" | "danger" | "cancel";
</script>

<script lang="ts">
  export let type: "button" | "submit" = "button";
  export let disabled = false;

  export let variant: Variant = "primary";
  export let width: "short" | "normal" = "normal";
  export let isPlus: boolean = false;
</script>

<button
  {type}
  {disabled}
  class="font-bold rounded {variant} {width}"
  class:disabled
  class:plus="{isPlus}"
  on:click
>
  {#if isPlus}
    +
  {:else}
    <slot />
  {/if}
</button>

<style>
  .short {
    @apply w-32 h-10;
  }
  .normal {
    @apply w-[17rem] h-10;
  }
  .plus {
    @apply fixed bottom-24 right-10 z-10;
    @apply w-14 h-14 text-3xl rounded-xl;
  }
  .disabled {
    @apply opacity-50 cursor-not-allowed;
  }
</style>
