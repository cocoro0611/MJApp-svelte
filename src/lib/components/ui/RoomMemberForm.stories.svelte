<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomMemberForm from "./RoomMemberForm.svelte";

  export const meta: Meta<RoomMemberForm> = {
    title: "UI/RoomMemberForm",
    component: RoomMemberForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { User } from "$lib/models/interface.js";

  let users: User[] = [
    { id: "", name: "井上", icon: "monster01.png", createdAt: "" },
    { id: "", name: "山本", icon: "monster02.png", createdAt: "" },
    { id: "", name: "太郎", icon: "monster03.png", createdAt: "" },
    { id: "", name: "太郎", icon: "monster04.png", createdAt: "" },
  ];
</script>

<Story name="Default">
  <RoomMemberForm {users} />
</Story>
