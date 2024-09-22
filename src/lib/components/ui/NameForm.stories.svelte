<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import NameForm from "./NameForm.svelte";

  export const meta: Meta<NameForm> = {
    title: "UI/NameForm",
    component: NameForm,
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
  <NameForm bind:user maxLength="{5}"></NameForm>
</Story>

{user.name}
