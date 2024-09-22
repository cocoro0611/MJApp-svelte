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
  import type { User } from "$lib/models/interface.js";
  let users: User[] = [
    {
      id: "",
      name: "井上",
      icon: "monster01.png",
      createdAt: "2024-09-19T02:07:07.415Z",
    },
    {
      id: "",
      name: "山本",
      icon: "monster02.png",
      createdAt: "2024-09-19T02:07:07.415Z",
    },
    {
      id: "",
      name: "太郎",
      icon: "monster03.png",
      createdAt: "2024-09-19T02:07:07.415Z",
    },
    {
      id: "",
      name: "太郎",
      icon: "monster04.png",
      createdAt: "2024-09-19T02:07:07.415Z",
    },
  ];

  let selectedUser: User | null = null;
  function handleUserSelect(event: CustomEvent<User>) {
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
