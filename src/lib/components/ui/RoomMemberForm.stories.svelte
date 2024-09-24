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
  import type { UserData } from "$lib/models/Member/type.js";

  let users: UserData[] = [
    { id: "", name: "井上", icon: "monster01.png" },
    { id: "", name: "山本", icon: "monster02.png" },
    { id: "", name: "太郎", icon: "monster03.png" },
    { id: "", name: "太郎", icon: "monster04.png" },
  ];
</script>

<Story name="Default">
  <RoomMemberForm {users} />
</Story>
