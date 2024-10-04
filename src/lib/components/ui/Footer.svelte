<script lang="ts">
  import Icon from "./Icon.svelte";
  import { currentPage } from "$lib/utils/page-store.js";
  import type { PageType } from "$lib/utils/page-store.js";
  import type { IconType } from "./Icon.svelte";

  interface TabList {
    id: PageType;
    label: string;
    iconType: IconType;
  }

  const tabs: TabList[] = [
    { id: "room", label: "ホーム", iconType: "room" },
    { id: "member", label: "メンバー", iconType: "user" },
    { id: "fuCount", label: "符数計算", iconType: "calculator" },
    { id: "hanCount", label: "翻数計算", iconType: "calculatorFilled" },
  ];
</script>

<nav class="flex justify-center fixed bottom-0 left-0 right-0 font-bold">
  <div class="flex max-w-screen-lg w-full mx-auto">
    {#each tabs as tab, index (tab.id)}
      <button
        class="flex flex-1 py-2 items-center justify-center flex-col md:flex-row
        border-y border-r border-gray-500
        {index === 0 ? 'rounded-l-lg border-l' : ''}
        {index === tabs.length - 1 ? 'rounded-r-lg' : ''}"
        class:btn-on="{$currentPage.startsWith(tab.id)}"
        class:btn-off="{!$currentPage.startsWith(tab.id)}"
        on:click="{() => currentPage.set(tab.id)}"
      >
        <Icon iconType="{tab.iconType}" />
        <span>{tab.label}</span>
      </button>
    {/each}
  </div>
</nav>

<style>
  .btn-on {
    @apply bg-blue-800 border-blue-800 text-white hover:bg-blue-900;
  }
  .btn-off {
    @apply bg-white text-black hover:bg-gray-100;
  }
</style>
