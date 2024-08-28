<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { ButtonGroup, Button } from "flowbite-svelte";
  import {
    HomeOutline,
    UserCircleOutline,
    RulerCombinedOutline,
    ScaleBalancedOutline,
  } from "flowbite-svelte-icons";

  export let currentPage: string;
  const dispatch = createEventDispatcher();

  function handleLinkClick(page: string) {
    dispatch("pageChange", page);
  }
</script>

<div class="flex justify-center fixed bottom-0 left-0 right-0">
  <ButtonGroup>
    <Button
      class="flex flex-col items-center hover:text-blue-500"
      color="{currentPage === 'home' ? 'blue' : 'alternative'}"
      on:click="{() => handleLinkClick('home')}"
    >
      <HomeOutline class="w-[71px] h-8 mb-1" />
      <span class="text-xs">ホーム</span>
    </Button>
    <Button
      class="flex flex-col items-center hover:text-blue-500"
      color="{currentPage === 'member' ? 'blue' : 'alternative'}"
      on:click="{() => handleLinkClick('member')}"
    >
      <UserCircleOutline class="w-[71px] h-8 mb-1" />
      <span class="text-xs">メンバー</span>
    </Button>
    <Button
      class="flex flex-col items-center hover:text-blue-500"
      color="{currentPage === 'fusuu' ? 'blue' : 'alternative'}"
      on:click="{() => handleLinkClick('fusuu')}"
    >
      <RulerCombinedOutline class="w-[71px] h-8 mb-1" />
      <span class="text-xs">符数計算 </span>
    </Button>
    <Button
      class="flex flex-col items-center hover:text-blue-500"
      color="{currentPage === 'hansuu' ? 'blue' : 'alternative'}"
      on:click="{() => handleLinkClick('hansuu')}"
    >
      <ScaleBalancedOutline class="w-[71px] h-8 mb-1" />
      <span class="text-xs">翻数計算</span>
    </Button>
  </ButtonGroup>
</div>
