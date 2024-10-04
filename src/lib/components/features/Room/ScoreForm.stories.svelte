<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ScoreForm from "./ScoreForm.svelte";

  export const meta: Meta<ScoreForm> = {
    title: "features/Room/ScoreForm",
    component: ScoreForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"
  ><ScoreForm scores="{sampleData.scores}" room="{sampleData.room}" />
</Story>
