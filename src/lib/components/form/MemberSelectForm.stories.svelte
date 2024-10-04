<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberSelectForm from "./MemberSelectForm.svelte";

  export const meta: Meta<MemberSelectForm> = {
    title: "FORM/MemberSelectForm",
    component: MemberSelectForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import type { UserData } from "$lib/models/Member/type.js";
  let user: UserData = { id: "", name: "", icon: "", isDefault: false };
</script>

<Story name="Default"><MemberSelectForm {user} /></Story>
