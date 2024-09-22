<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberSelectForm from "./MemberSelectForm.svelte";

  export const meta: Meta<MemberSelectForm> = {
    title: "UI/MemberSelectForm",
    component: MemberSelectForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { User } from "$lib/models/interface.js";

  let user: Omit<User, "createdAt"> = {
    id: "",
    name: "",
    icon: "monster01.png",
  };
</script>

<Story name="Default">
  <MemberSelectForm bind:user />
</Story>

{user.icon}
