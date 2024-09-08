<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import Icon from "./Icon.svelte";

  export let isScorePage: Boolean;
  export let currentPage: "home" | "member" | "fusuu" | "hansuu" = "home";

  interface tabsDefinition {
    id: typeof currentPage;
    label: string;
    iconType: "home" | "user" | "calculator" | "calculatorFilled";
  }

  const tabs: tabsDefinition[] = [
    { id: "home", label: "ホーム", iconType: "home" },
    { id: "member", label: "メンバー", iconType: "user" },
    { id: "fusuu", label: "符数計算", iconType: "calculator" },
    { id: "hansuu", label: "翻数計算", iconType: "calculatorFilled" },
  ];

  const handleLinkClick = (page: typeof currentPage) => {
    currentPage = page;
    isScorePage = false;
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
        <Icon type="{tab.iconType}" />
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
