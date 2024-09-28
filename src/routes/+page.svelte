<script lang="ts">
  import ScorePage from "./Room/+page.svelte";
  import MemberPage from "./Member/+page.svelte";
  import FuCountPage from "./FuCount/+page.svelte";
  import HanCountPage from "./HanCount/+page.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  import { onMount } from "svelte";
  import { getLocalData, isValidPageType } from "$lib/utils/localStorage.js";

  import type { PageData } from "./$types.js";
  import type { PageType } from "$lib/utils/localStorage.js";

  export let data: PageData;
  let currentPage: PageType = "room";

  onMount(() => {
    const savedPage = getLocalData("currentPage");
    if (savedPage && isValidPageType(savedPage)) {
      currentPage = savedPage;
    }
  });
</script>

{#if currentPage === "room"}
  <ScorePage rooms="{data.rooms}" scores="{data.scores}" users="{data.users}" />
{:else if currentPage === "member"}
  <MemberPage users="{data.users}" />
{:else if currentPage === "fuCount"}
  <FuCountPage />
{:else if currentPage === "hanCount"}
  <HanCountPage />
{/if}

<Footer bind:currentPage />
