<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import FuCountButton from "./FuCountButton.svelte";

  export const meta: Meta<FuCountButton> = {
    title: "features/Point-Fusuu/FuCountButton",
    component: FuCountButton,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let buttonStates: { [key: string]: boolean } = {};
  let count: { [key: string]: number } = {};
  let han = 0;
  let fu = 0;
</script>

<Story name="Default">
  <div class="flex justify-center text-xl">合計翻数: {han}</div>
  <div class="flex justify-center text-xl">合計符数: {fu}</div>
  <FuCountButton bind:han bind:fu bind:buttonStates bind:count />
</Story>
