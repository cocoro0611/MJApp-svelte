<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import Icon from "./Icon.svelte";
  import { onMount } from "svelte";

  type PageType = "home" | "member" | "fuCount" | "hanCount";
  type IconType = "home" | "user" | "calculator" | "calculatorFilled";

  export let currentPage: PageType;
  export let isScorePage;

  interface Tab {
    id: PageType;
    label: string;
    iconType: IconType;
  }

  const tabs: Tab[] = [
    { id: "home", label: "ホーム", iconType: "home" },
    { id: "member", label: "メンバー", iconType: "user" },
    { id: "fuCount", label: "符数計算", iconType: "calculator" },
    { id: "hanCount", label: "翻数計算", iconType: "calculatorFilled" },
  ];

  const handleLinkClick = (page: PageType) => {
    currentPage = page;
    isScorePage = false;
    localStorage.setItem("currentPage", page);
  };

  onMount(() => {
    const savedPage = localStorage.getItem("currentPage") as PageType | null;
    if (savedPage && tabs.some((tab) => tab.id === savedPage)) {
      currentPage = savedPage;
    }
  });
</script>

<nav class="fixed bottom-0 left-0 right-0 flex justify-center">
  <ButtonGroup class="w-full max-w-screen-xl">
    {#each tabs as tab (tab.id)}
      <Button
        color="light"
        class="flex flex-col items-center flex-1 {currentPage === tab.id
          ? 'tab-btn-off'
          : 'tab-btn-on'}
          py-2 px-1 "
        on:click="{() => handleLinkClick(tab.id)}"
      >
        <Icon type="{tab.iconType}" />
        <span class="text-[14px]">{tab.label}</span>
      </Button>
    {/each}
  </ButtonGroup>
</nav>

<style>
  :global(.tab-btn-on) {
    @apply border border-gray-500 bg-white text-black hover:bg-gray-100 hover:text-blue-800;
  }
  :global(.tab-btn-off) {
    @apply border border-gray-500 bg-blue-800 text-white hover:bg-blue-900 hover:text-white;
  }
  :global(.flowbite-svelte-button-group) {
    @apply w-full;
  }
</style>
