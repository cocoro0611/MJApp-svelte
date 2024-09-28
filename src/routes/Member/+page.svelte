<script lang="ts">
  import MemberHome from "../../routes/Member/home/+page.svelte";
  import MemberNew from "../../routes/Member/new/+page.svelte";
  import MemberDetail from "../../routes/Member/detail/+page.svelte";

  import type { PageType } from "$lib/utils/localStorage.js";
  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];

  let currentPage: PageType = "member";
  let selectedUser: UserData;

  const handleUserSelect = (event: CustomEvent<UserData>) => {
    selectedUser = event.detail;
    currentPage = "memberDetail";
  };
</script>

{#if currentPage === "member"}
  <MemberHome {users} bind:currentPage on:select="{handleUserSelect}"
  ></MemberHome>
{:else if currentPage === "memberNew"}
  <MemberNew bind:currentPage />
{:else if currentPage === "memberDetail"}
  <MemberDetail bind:currentPage user="{selectedUser}" />
{/if}
