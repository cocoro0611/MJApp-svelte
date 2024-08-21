<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import FuroButton from "./FuroButton.svelte";

  export const meta: Meta<FuroButton> = {
    title: "features/Point-Hansuu/FuroButton",
    component: FuroButton,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
  let han = 0;
</script>

<Story name="Default">
  <div class="flex justify-center text-xl">合計翻数: {han}</div>
  <FuroButton bind:han />
</Story>
