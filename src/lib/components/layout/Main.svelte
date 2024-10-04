<script lang="ts">
  export let isCalculationHeader: boolean = false;
  export let isScoreHeader: boolean = false;
</script>

<!-- スクロールの範囲の管理 -->
<main
  class="flex h-screen pt-32 pb-[4.6rem]"
  class:pt-48="{isCalculationHeader}"
  class:pt-[15.8rem]="{isScoreHeader}"
>
  <div class="flex-grow overflow-y-auto">
    <slot />
  </div>
</main>
