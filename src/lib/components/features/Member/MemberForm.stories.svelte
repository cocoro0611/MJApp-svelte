<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberForm from "./MemberForm.svelte";

  export const meta: Meta<MemberForm> = {
    title: "features/Member/MemberForm",
    component: MemberForm,
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
  <MemberForm {user} />
</Story>
