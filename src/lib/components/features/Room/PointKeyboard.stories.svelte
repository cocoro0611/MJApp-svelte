<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointKeyboard from "./PointKeyboard.svelte";

  export const meta: Meta<PointKeyboard> = {
    title: "features/Room/PointKeyboard",
    component: PointKeyboard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  let input: number = 0;
</script>

<Story name="Default">
  {input}
  <PointKeyboard bind:input />
</Story>
