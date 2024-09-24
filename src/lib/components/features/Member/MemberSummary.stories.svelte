<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberSummary from "./MemberSummary.svelte";

  export const meta: Meta<MemberSummary> = {
    title: "features/Member/MemberSummary",
    component: MemberSummary,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { UserData } from "$lib/models/Member/type.js";
  let users: UserData[] = [
    {
      id: "",
      name: "井上",
      icon: "monster01.png",
    },
    {
      id: "",
      name: "山本",
      icon: "monster02.png",
    },
    {
      id: "",
      name: "太郎",
      icon: "monster03.png",
    },
    {
      id: "",
      name: "太郎",
      icon: "monster04.png",
    },
  ];

  let selectedUser: UserData;
  function handleUserSelect(event: CustomEvent<UserData>) {
    selectedUser = event.detail;
  }
</script>

<Story name="Default">
  <MemberSummary {users} on:select="{handleUserSelect}" />

  {#if selectedUser}
    <div>
      <h2>選択されたユーザー：</h2>
      <p>名前: {selectedUser.name}</p>
      <p>ID: {selectedUser.id}</p>
    </div>
  {/if}
</Story>
