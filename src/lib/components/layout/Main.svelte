<script lang="ts">
  export let isCalculationHeader: boolean = false;
  export let isScoreHeader: boolean = false;
</script>

<!-- スクロールの管理 -->
<div
  class="flex h-screen
  {isCalculationHeader ? 'pt-44' : isScoreHeader ? 'pt-60' : 'pt-28'} pb-20"
>
  <div class="flex-grow overflow-y-auto">
    <slot />
  </div>
</div>
