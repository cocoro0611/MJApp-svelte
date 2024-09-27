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
  import type { UserData } from "$lib/models/Member/type.js";

  let user: UserData = {
    id: "",
    name: "",
    icon: "monster01.png",
  };
</script>

<Story name="Default">
  <MemberSelectForm bind:user />
</Story>

{user.icon}
