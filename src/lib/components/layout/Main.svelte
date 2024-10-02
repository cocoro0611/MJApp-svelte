<script lang="ts">
  export let isCalculationHeader: boolean = false;
  export let isScoreHeader: boolean = false;
</script>

<!-- スクロールの管理 -->
<div
  class="flex h-screen
  {isCalculationHeader ? 'pt-48' : isScoreHeader ? 'pt-64' : 'pt-32'} pb-20"
>
  <div class="flex-grow overflow-y-auto">
    <slot />
  </div>
</div>
