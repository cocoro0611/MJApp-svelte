<script lang="ts">
  import TotalPointPage from "../routes/Total-Point/+page.svelte";
  import PointFusuuPage from "../routes/Point-Fusuu/+page.svelte";
  import PointHansuuPage from "../routes/Point-Hansuu/+page.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  import { onMount } from "svelte";

  let currentPage = "home";

  onMount(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      currentPage = storedPage;
    }
  });

  function handlePageChange(event: CustomEvent<string>) {
    currentPage = event.detail;
    localStorage.setItem("currentPage", currentPage);
    window.history.pushState(null, "", "/");
  }
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

<footer class="flex-none">
  <Footer {currentPage} on:pageChange="{handlePageChange}" />
</footer>
