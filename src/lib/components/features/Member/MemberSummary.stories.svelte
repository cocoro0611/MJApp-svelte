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
    { id: "", name: "井上", icon: "monster01.png" },
    { id: "", name: "山本", icon: "monster02.png" },
    { id: "", name: "太郎", icon: "monster03.png" },
    { id: "", name: "太郎", icon: "monster04.png" },
    { id: "", name: "太郎", icon: "monster05.png" },
    { id: "", name: "太郎", icon: "monster06.png" },
    { id: "", name: "太郎", icon: "monster07.png" },
    { id: "", name: "太郎", icon: "monster08.png" },
    { id: "", name: "太郎", icon: "monster09.png" },
    { id: "", name: "太郎", icon: "monster10.png" },
    { id: "", name: "太郎", icon: "monster11.png" },
    { id: "", name: "太郎", icon: "monster12.png" },
  ];
</script>

<Story name="Default">
  <MemberSummary {users} />
</Story>
