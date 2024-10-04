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
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"><MemberForm user="{sampleData.user}" /></Story>
