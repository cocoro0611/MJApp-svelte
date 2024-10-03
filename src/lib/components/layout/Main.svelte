<script lang="ts">
  export let isCalculationHeader: boolean = false;
  export let isScoreHeader: boolean = false;
</script>

<!-- スクロールの管理 -->
<main
  class="flex h-screen pb-20"
  class:pt-48="{isCalculationHeader}"
  class:pt-[15.8rem]="{isScoreHeader}"
  class:pt-32="{!isCalculationHeader && !isScoreHeader}"
>
  <div class="flex-grow overflow-y-auto">
    <slot />
  </div>
</main>
