<script lang="ts">
  import type { RoomFormData } from "$lib/models/Room/type.js";
  import { Input } from "flowbite-svelte";

  export let roomForm: Omit<RoomFormData, "users">;
</script>

<Input
  class="border border-blue-500"
  name="gameAmount"
  type="number"
  placeholder="場代を入力"
  value="{roomForm.gameAmount}"
/>
