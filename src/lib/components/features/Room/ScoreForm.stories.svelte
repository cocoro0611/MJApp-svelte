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

  import type { RoomData, ScoreData } from "$lib/models/Room/type.js";
  let scores: ScoreData[];
  let room: RoomData;
</script>

<Story name="Default">
  <ScoreForm formAction="create" {scores} {room} />
</Story>
