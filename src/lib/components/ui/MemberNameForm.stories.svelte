<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberNameForm from "./MemberNameForm.svelte";

  export const meta: Meta<MemberNameForm> = {
    title: "UI/MemberNameForm",
    component: MemberNameForm,
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
  <MemberNameForm bind:user></MemberNameForm>
</Story>

{user.name}
