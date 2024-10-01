<script lang="ts">
  import MemberHome from "../../routes/Member/home/+page.svelte";
  import MemberNew from "../../routes/Member/new/+page.svelte";
  import MemberEdit from "../../routes/Member/edit/+page.svelte";
  import { currentPage } from "$lib/utils/pageStore.js";
  import { getLocalData } from "$lib/utils/localStorage.js";

  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[];

  $: selectedUser =
    $currentPage === "memberEdit"
      ? users.find((user) => user.id === getLocalData("userId")) || null
      : null;
</script>

{#if $currentPage === "member"}
  <MemberHome {users} />
{:else if $currentPage === "memberNew"}
  <MemberNew />
{:else if $currentPage === "memberEdit" && selectedUser}
  <MemberEdit user="{selectedUser}" />
{/if}
