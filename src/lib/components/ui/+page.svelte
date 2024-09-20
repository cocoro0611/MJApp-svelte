<script lang="ts">
  import type { PageData } from "./$types.js";
  export let data: PageData;

  import ScorePage from "./Total-Point/+page.svelte";
  import MemberPage from "../routes/Member/+page.svelte";
  import FusuuPage from "./Point-Fusuu/+page.svelte";
  import HansuuPage from "./Point-Hansuu/+page.svelte";
  import Header from "$lib/components/ui/Header.svelte";
  import Footer from "$lib/components/ui/Footer.svelte";

  let currentPage: "home" | "member" | "fuCount" | "hanCount" = "home";
  let isScorePage: Boolean = false;
</script>

<Header isContents>
  <svelte:fragment slot="left">左</svelte:fragment>
  <svelte:fragment slot="center">中央</svelte:fragment>
  <svelte:fragment slot="right">右</svelte:fragment>
  aa
</Header>

<!-- {#if currentPage === "home"}
  <ScorePage
    bind:isScorePage
    rooms="{data.rooms}"
    scores="{data.scores}"
    users="{data.users}"
  />
{:else if currentPage === "member"}
  <MemberPage users="{data.users}" />
{:else if currentPage === "fuCount"}
  <FusuuPage />
{:else if currentPage === "hanCount"}
  <HansuuPage />
{/if} -->

<Footer bind:currentPage bind:isScorePage />
