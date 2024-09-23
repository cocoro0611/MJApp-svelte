<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import Icon from "./Icon.svelte";
  import { onMount } from "svelte";

  type PageType = "score" | "member" | "fuCount" | "hanCount";
  type IconType = "score" | "user" | "calculator" | "calculatorFilled";

  export let currentPage: PageType;

  interface TabList {
    id: PageType;
    label: string;
    iconType: IconType;
  }

  const tabs: TabList[] = [
    { id: "score", label: "ホーム", iconType: "score" },
    { id: "member", label: "メンバー", iconType: "user" },
    { id: "fuCount", label: "符数計算", iconType: "calculator" },
    { id: "hanCount", label: "翻数計算", iconType: "calculatorFilled" },
  ];

  const handleLinkClick = (page: PageType) => {
    currentPage = page;
    localStorage.setItem("currentPage", page);
  };

  onMount(() => {
    const savedPage = localStorage.getItem("currentPage") as PageType | null;
    if (savedPage && tabs.some((tab) => tab.id === savedPage)) {
      currentPage = savedPage;
    }
  });
</script>

<nav class="flex justify-center fixed bottom-0 left-0 right-0">
  <ButtonGroup class="max-w-screen-lg container mx-auto">
    {#each tabs as tab (tab.id)}
      <Button
        color="light"
        class="flex flex-col flex-1 py-2 px-1 border-gray-500 {currentPage ===
        tab.id
          ? 'bg-blue-800 text-white hover:bg-blue-900'
          : 'bg-white text-black hover:bg-gray-100'}"
        on:click="{() => handleLinkClick(tab.id)}"
      >
        <Icon type="{tab.iconType}" />
        <span>{tab.label}</span>
      </Button>
    {/each}
  </ButtonGroup>
</nav>
