<script lang="ts">
  import Icon from "./Icon.svelte";
  import { ButtonGroup, Button } from "flowbite-svelte";
  import { currentPage } from "$lib/utils/pageStore.js";

  import type { PageType } from "$lib/utils/pageStore.js";

  interface TabList {
    id: PageType;
    label: string;
    iconType: "room" | "user" | "calculator" | "calculatorFilled";
  }

  const tabs: TabList[] = [
    { id: "room", label: "ホーム", iconType: "room" },
    { id: "member", label: "メンバー", iconType: "user" },
    { id: "fuCount", label: "符数計算", iconType: "calculator" },
    { id: "hanCount", label: "翻数計算", iconType: "calculatorFilled" },
  ];

  function isActiveTab(currentPage: string, tabId: string): boolean {
    return currentPage.startsWith(tabId);
  }
</script>

<nav class="flex justify-center fixed bottom-0 left-0 right-0">
  <ButtonGroup class="max-w-screen-lg container mx-auto">
    {#each tabs as tab (tab.id)}
      <Button
        color="light"
        class="flex flex-1 py-2 px-1 border-gray-500 flex-col md:flex-row
        {isActiveTab($currentPage, tab.id)
          ? 'bg-blue-800 text-white hover:bg-blue-900'
          : 'bg-white text-black hover:bg-gray-100'}"
        on:click="{() => currentPage.set(tab.id)}"
      >
        <Icon type="{tab.iconType}" />
        <span>{tab.label}</span>
      </Button>
    {/each}
  </ButtonGroup>
</nav>

<!-- <nav class="flex justify-center fixed bottom-0 left-0 right-0">
  <div class="flex justify-center max-w-screen-lg w-full mx-auto">
    {#each tabs as tab (tab.id)}
      <button
        class="flex flex-1 py-2 px-1 border border-gray-300 flex-col md:flex-row items-center justify-center
        {isActiveTab($currentPage, tab.id)
          ? 'bg-blue-800 text-white hover:bg-blue-900'
          : 'bg-white text-gray-700 hover:bg-gray-100'}
        transition-colors duration-200 ease-in-out"
        on:click="{() => currentPage.set(tab.id)}"
      >
        <Icon type="{tab.iconType}" />
        <span>{tab.label}</span>
      </button>
    {/each}
  </div>
</nav> -->
