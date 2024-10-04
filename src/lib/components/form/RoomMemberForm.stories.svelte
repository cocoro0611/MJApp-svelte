<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomMemberForm from "./RoomMemberForm.svelte";

  export const meta: Meta<RoomMemberForm> = {
    title: "FORM/RoomMemberForm",
    component: RoomMemberForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { UserData } from "$lib/models/Member/type.js";
  export let users: UserData[] = [
    { id: "1", name: "選択１", icon: "monster01.png", isDefault: true },
    { id: "2", name: "選択２", icon: "", isDefault: true },
    { id: "3", name: "選択３", icon: "", isDefault: true },
    { id: "4", name: "選択４", icon: "", isDefault: true },
    { id: "5", name: "未選択１", icon: "", isDefault: false },
    { id: "6", name: "未選択２", icon: "", isDefault: false },
    { id: "7", name: "未選択３", icon: "", isDefault: false },
    { id: "8", name: "未選択４", icon: "", isDefault: false },
  ];
</script>

<Story name="Default"><RoomMemberForm {users} /></Story>
