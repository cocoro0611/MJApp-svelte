<script lang="ts">
  import MemberHome from "../../routes/Member/home/+page.svelte";
  import MemberNew from "../../routes/Member/new/+page.svelte";
  import MemberDetail from "../../routes/Member/detail/+page.svelte";

  import type { User } from "$lib/models/interface.js";
  export let users: User[];

  let currentPage: "memberHome" | "memberNew" | "memberDetail" = "memberHome";
</script>

{#if currentPage === "memberHome"}
  <MemberHome {users} bind:currentPage />
{:else if currentPage === "memberNew"}
  <MemberNew {users} bind:currentPage />
{:else if currentPage === "memberDetail"}
  <MemberDetail />
{/if}
