<script lang="ts">
  import type { Room } from "$lib/models/interface.js";
  import { Input } from "flowbite-svelte";

  export let room: Room;
  let maxLength: number = 10;

  const updateNameLength = (event: Event) => {
    const input = event.target as HTMLInputElement;
    room.name = input.value;
  };

  $: currentLength = room.name.length;
</script>

<div class="font-bold py-1">部屋名</div>
<Input
  class="border border-blue-500"
  name="name"
  placeholder="部屋名を入力"
  value="{room.name}"
  on:input="{updateNameLength}"
/>
<div class="flex justify-end">{currentLength}/{maxLength}</div>
