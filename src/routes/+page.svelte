<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;

  import TotalPointPage from "../routes/Total-Point/+page.svelte";
  import MemberPage from "../routes/Member/+page.svelte";
  import PointFusuuPage from "../routes/Point-Fusuu/+page.svelte";
  import PointHansuuPage from "../routes/Point-Hansuu/+page.svelte";
  import Header from "$lib/components/ui/Header.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  let currentPage: "home" | "member" | "fuCount" | "hanCount" = "home";
  let isScorePage: Boolean = false;
</script>

<Header pageType="{currentPage}" />

{#if currentPage === "home"}
  <TotalPointPage bind:isScorePage rooms="{data.rooms}" users="{data.users}" />
{:else if currentPage === "member"}
  <MemberPage users="{data.users}" />
{:else if currentPage === "fuCount"}
  <PointFusuuPage />
{:else if currentPage === "hanCount"}
  <PointHansuuPage />
{/if}

<Footer bind:currentPage bind:isScorePage />
