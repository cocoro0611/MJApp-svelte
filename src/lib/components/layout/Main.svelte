<script lang="ts">
  export let isLongHeader: boolean = false;
</script>

<!-- スクロールの管理 -->
<div class="flex h-screen {isLongHeader ? 'pt-44' : 'pt-28'} pb-20">
  <div class="flex-grow overflow-y-auto">
    <slot />
  </div>
</div>
