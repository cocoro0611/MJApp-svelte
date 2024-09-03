<script lang="ts">
  import TotalPointPage from "../routes/Total-Point/+page.svelte";
  import PointFusuuPage from "../routes/Point-Fusuu/+page.svelte";
  import PointHansuuPage from "../routes/Point-Hansuu/+page.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  let currentPage: "home" | "member" | "fusuu" | "hansuu" = "hansuu";

  const handlePageChange = (page: CustomEvent<typeof currentPage>) => {
    currentPage = page.detail;
  };
</script>

{#if currentPage === "home"}
  <TotalPointPage />
{:else if currentPage === "member"}
  メンバー
{:else if currentPage === "fusuu"}
  <PointFusuuPage />
{:else if currentPage === "hansuu"}
  <PointHansuuPage />
{/if}

<Footer bind:currentPage on:pageChange="{handlePageChange}" />
