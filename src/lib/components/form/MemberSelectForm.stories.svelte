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
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"><MemberSelectForm user="{sampleData.user}" /></Story>
