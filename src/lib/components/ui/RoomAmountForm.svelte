<script lang="ts">
  import type { RoomData } from "$lib/models/Room/type.js";
  import { Input } from "flowbite-svelte";

  export let room: Omit<RoomData, "users">;
</script>

<Input
  class="border border-blue-500"
  name="gameAmount"
  type="number"
  placeholder="金額を入力"
  value="{room.gameAmount}"
>
  <span slot="left">¥</span>
</Input>
