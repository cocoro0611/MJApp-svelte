<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointCard from "./PointCard.svelte";

  export const meta: Meta<PointCard> = {
    title: "features/Room/PointCard",
    component: PointCard,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <PointCard />
</Story>
