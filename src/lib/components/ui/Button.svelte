<script lang="ts">
  export let isSelected = false;
</script>

<button
  class:btn-primary="{!isSelected}"
  class:btn-primary-on="{isSelected}"
  on:click
>
  <slot />
</button>
