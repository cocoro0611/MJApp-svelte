<script lang="ts">
  import MemberHome from "../../routes/Member/home/+page.svelte";
  import MemberNew from "../../routes/Member/new/+page.svelte";
  import MemberDetail from "../../routes/Member/detail/+page.svelte";

  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];

  let currentPage: "memberHome" | "memberNew" | "memberDetail" = "memberHome";

  let selectedUser: UserData;

  const handleUserSelect = (event: CustomEvent<UserData>) => {
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
