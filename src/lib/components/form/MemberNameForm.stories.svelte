<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberNameForm from "./MemberNameForm.svelte";

  export const meta: Meta<MemberNameForm> = {
    title: "FORM/MemberNameForm",
    component: MemberNameForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">未作成</Story>
