<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberSummary from "./MemberSummary.svelte";

  export const meta: Meta<MemberSummary> = {
    title: "features/Point-Fusuu/MemberSummary",
    component: MemberSummary,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <MemberSummary />
</Story>
