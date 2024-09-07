<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Tensuu from "./Tensuu.svelte";

  export const meta: Meta<Tensuu> = {
    title: "features/Total-Point/Tensuu",
    component: Tensuu,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Tensuu />
</Story>
