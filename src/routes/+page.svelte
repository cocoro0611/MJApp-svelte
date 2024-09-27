<<<<<<< HEAD
aaa
=======
<script lang="ts">
  import ScorePage from "./Room/+page.svelte";
  import MemberPage from "./Member/+page.svelte";
  import FuCountPage from "./FuCount/+page.svelte";
  import HanCountPage from "./HanCount/+page.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  import type { PageData } from "./$types.js";
  export let data: PageData;

  let currentPage: "room" | "member" | "fuCount" | "hanCount" = "room";
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
>>>>>>> main
