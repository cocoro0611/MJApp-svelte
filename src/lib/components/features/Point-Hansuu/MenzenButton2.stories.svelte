<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MenzenButton2 from "./MenzenButton2.svelte";

  export const meta: Meta<MenzenButton2> = {
    title: "features/Point-Hansuu/MenzenButton2",
    component: MenzenButton2,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let han: number = 0;
</script>

<Story name="Default">
  <MenzenButton2 bind:han />
  <div>TotalHan：{han}</div>
</Story>
