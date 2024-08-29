<script lang="ts">
  export let isSelected: boolean = false;
</script>

<button class="w-20 h-20 {isSelected ? 'btn-on' : 'btn-off'}" on:click>
  {#if $$slots.icon}
    <div class="flex justify-center">
      <slot name="icon" />
    </div>
  {/if}
  <div class="text-sm">
    <slot />
  </div>
</button>
