<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;

  import ScorePage from "../routes/Total-Point/+page.svelte";
  import MemberPage from "../routes/Member/+page.svelte";
  import PointFusuuPage from "../routes/Point-Fusuu/+page.svelte";
  import PointHansuuPage from "../routes/Point-Hansuu/+page.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  let currentPage: "score" | "member" | "fuCount" | "hanCount" = "score";
  let isScorePage: Boolean = false;
</script>

{#if currentPage === "score"}
  <ScorePage
    bind:isScorePage
    rooms="{data.rooms}"
    scores="{data.scores}"
    users="{data.users}"
  />
{:else if currentPage === "member"}
  <MemberPage users="{data.users}" />
{:else if currentPage === "fuCount"}
  <PointFusuuPage />
{:else if currentPage === "hanCount"}
  <PointHansuuPage />
{/if}

<Footer bind:currentPage bind:isScorePage />
