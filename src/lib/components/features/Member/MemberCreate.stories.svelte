<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberCreate from "./MemberCreate.svelte";

  export const meta: Meta<MemberCreate> = {
    title: "features/Member/MemberCreate",
    component: MemberCreate,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <MemberCreate />
</Story>
