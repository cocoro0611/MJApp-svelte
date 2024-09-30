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

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  let scores: ScoreData[];
  let room: RoomData;
</script>

<Story name="Default">
  <ChipForm formAction="create" {scores} {room} />
</Story>
