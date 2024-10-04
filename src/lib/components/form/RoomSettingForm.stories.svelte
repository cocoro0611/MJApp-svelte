<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomSettingForm from "./RoomSettingForm.svelte";

  export const meta: Meta<RoomSettingForm> = {
    title: "FORM/RoomSettingForm",
    component: RoomSettingForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"><RoomSettingForm room="{sampleData.room}" /></Story>
