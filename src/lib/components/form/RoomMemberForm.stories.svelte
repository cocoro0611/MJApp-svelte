<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import RoomMemberForm from "./RoomMemberForm.svelte";

  export const meta: Meta<RoomMemberForm> = {
    title: "FORM/RoomMemberForm",
    component: RoomMemberForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default"><RoomMemberForm users="{sampleData.users}" /></Story>
