<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ChipForm from "./ChipForm.svelte";

  export const meta: Meta<ChipForm> = {
    title: "features/Room/ChipForm",
    component: ChipForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"
  ><ChipForm chips="{sampleData.chips}" room="{sampleData.room}" />
</Story>
