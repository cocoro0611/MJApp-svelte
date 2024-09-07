<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import {
    IconHome,
    IconUser,
    IconCalculatorFilled,
    IconCalculator,
  } from "@tabler/icons-svelte";
  import type { ComponentType } from "svelte";

  export let currentPage: "home" | "member" | "fusuu" | "hansuu" = "home";

  interface tabsDefinition {
    id: typeof currentPage;
    label: string;
    icon: ComponentType;
  }

  const tabs: tabsDefinition[] = [
    { id: "home", label: "ホーム", icon: IconHome },
    { id: "member", label: "メンバー", icon: IconUser },
    { id: "fusuu", label: "符数計算", icon: IconCalculatorFilled },
    { id: "hansuu", label: "翻数計算", icon: IconCalculator },
  ];

  const handleLinkClick = (page: typeof currentPage) => {
    currentPage = page;
  };
</script>

<div class="flex justify-center fixed bottom-0 left-0 right-0">
  <ButtonGroup>
    {#each tabs as tab}
      <Button
        color="light"
        class="flex flex-col items-center 
        {currentPage === tab.id ? 'tab-btn-off' : 'tab-btn-on'}"
        currentPage="home"
        on:click="{() => handleLinkClick(tab.id)}"
      >
        <svelte:component this="{tab.icon}" class="w-[71px] h-8 mb-1" />
        <span class="text-xs">{tab.label}</span>
      </Button>
    {/each}
  </ButtonGroup>
</div>

<style>
  :global(.tab-btn-on) {
    @apply border border-gray-500 bg-white text-black hover:bg-gray-100 hover:text-blue-800;
  }
  :global(.tab-btn-off) {
    @apply border border-gray-500 bg-blue-800 text-white hover:bg-blue-900 hover:text-white;
  }
</style>
