<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;

  import TotalPointPage from "../routes/Total-Point/+page.svelte";
  import MemberPage from "../routes/Member/+page.svelte";
  import PointFusuuPage from "../routes/Point-Fusuu/+page.svelte";
  import PointHansuuPage from "../routes/Point-Hansuu/+page.svelte";
  import Header from "$lib/components/ui/Header.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  let currentPage: "home" | "member" | "fusuu" | "hansuu" = "home";

  const handlePageChange = (page: CustomEvent<typeof currentPage>) => {
    currentPage = page.detail;
  };
</script>

<Header pageType="{currentPage}" />

{#if currentPage === "home"}
  <TotalPointPage rooms="{data.rooms}" />
{:else if currentPage === "member"}
  <MemberPage users="{data.users}" />
{:else if currentPage === "fusuu"}
  <PointFusuuPage />
{:else if currentPage === "hansuu"}
  <PointHansuuPage />
{/if}

<Footer bind:currentPage on:pageChange="{handlePageChange}" />
