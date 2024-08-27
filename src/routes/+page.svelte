<script lang="ts">
  import { fade } from "svelte/transition";
  import Setting from "$lib/components/features/Total-Point/Setting.svelte";

  let showSetting = false;

  function toggleSetting() {
    showSetting = !showSetting;
  }
</script>

<div class="relative">
  <div class="flex justify-center">スコア表</div>

  <button
    class="border border-blue-500 bg-white text-blue-500 hover:bg-blue-50 px-1 py-1 w-14 h-14 text-2xl"
    on:click="{toggleSetting}"
  >
    +
  </button>

  {#if showSetting}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      on:click="{toggleSetting}"
      transition:fade
    ></div>
    <div
      class="fixed inset-0 flex items-center justify-center z-50"
      transition:fade
    >
      <div
        class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <Setting />
        <button
          class="mt-4 border border-blue-500 bg-white text-blue-500 hover:bg-blue-50 px-2 py-1 rounded"
          on:click="{toggleSetting}"
        >
          閉じる
        </button>
      </div>
    </div>
  {/if}
</div>
