<script lang="ts">
  import MemberHome from "../../routes/Member/home/+page.svelte";
  import MemberNew from "../../routes/Member/new/+page.svelte";
  import MemberDetail from "../../routes/Member/detail/+page.svelte";

  import type { User } from "$lib/models/interface.js";
  export let users: User[];

  let currentPage: "memberHome" | "memberNew" | "memberDetail" = "memberHome";

  let selectedUser: User;

  const handleUserSelect = (event: CustomEvent<User>) => {
    selectedUser = event.detail;
    currentPage = "memberDetail";
  };
</script>

{#if currentPage === "memberHome"}
  <MemberHome {users} bind:currentPage on:select="{handleUserSelect}" />
{:else if currentPage === "memberNew"}
  <MemberNew bind:currentPage />
{:else if currentPage === "memberDetail"}
  <MemberDetail bind:currentPage user="{selectedUser}" />
{/if}
