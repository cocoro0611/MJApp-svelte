<script lang="ts">
  import type { RoomData } from "$lib/models/Room/type.js";
  import { Input } from "flowbite-svelte";

  export let room: RoomData;
  let maxLength: number = 10;

  const updateNameLength = (event: Event) => {
    const input = event.target as HTMLInputElement;
    room.name = input.value;
  };

  $: currentLength = room.name.length;
</script>

<Input
  class="border border-blue-500"
  name="name"
  placeholder="部屋名を入力"
  value="{room.name}"
  on:input="{updateNameLength}"
/>
<div class="flex justify-end">{currentLength}/{maxLength}</div>
