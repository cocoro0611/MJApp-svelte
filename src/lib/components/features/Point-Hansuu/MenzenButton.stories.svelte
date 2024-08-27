<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MenzenButton from "./MenzenButton.svelte";

  export const meta: Meta<MenzenButton> = {
    title: "features/Point-Hansuu/MenzenButton",
    component: MenzenButton,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let buttonStates: { [key: string]: boolean } = {};
  let doraCount: { [key: string]: number } = {};
  let han = 0;
</script>

<Story name="Default">
  <div class="flex justify-center text-xl">合計翻数: {han}</div>
  <MenzenButton bind:han bind:buttonStates bind:doraCount />
</Story>
