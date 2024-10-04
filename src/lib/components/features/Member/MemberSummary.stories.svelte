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
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"><MemberSummary users="{sampleData.users}" /></Story>
