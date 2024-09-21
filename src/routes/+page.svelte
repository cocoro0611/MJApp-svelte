<script lang="ts">
  import ScorePage from "./Score/+page.svelte";
  import MemberPage from "./Member/+page.svelte";
  import FuCountPage from "./FuCount/+page.svelte";
  import HanCountPage from "./HanCount/+page.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  import type { PageData } from "./$types.js";
  export let data: PageData;

  let currentPage: "score" | "member" | "fuCount" | "hanCount" = "score";
  let isScorePage: Boolean = false;
</script>

{#if currentPage === "score"}
  <ScorePage
    rooms="{data.rooms}"
    scores="{data.scores}"
    users="{data.users}"
    bind:isScorePage
  />
{:else if currentPage === "member"}
  <MemberPage users="{data.users}" />
{:else if currentPage === "fuCount"}
  <FuCountPage />
{:else if currentPage === "hanCount"}
  <HanCountPage />
{/if}

<Footer bind:currentPage bind:isScorePage />
