<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointCardCreate from "./PointCardCreate.svelte";

  export const meta: Meta<PointCardCreate> = {
    title: "features/Room/PointCardCreate",
    component: PointCardCreate,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <PointCardCreate />
</Story>
