<script lang="ts">
  import type { RoomFormData } from "$lib/models/Room/type.js";
  import { Input } from "flowbite-svelte";

  export let roomForm: Omit<RoomFormData, "users">;
  let maxLength: number = 10;

  const updateNameLength = (event: Event) => {
    const input = event.target as HTMLInputElement;
    roomForm.name = input.value;
  };

  $: currentLength = roomForm.name.length;
</script>

<Input
  class="border border-blue-500"
  name="name"
  placeholder="部屋名を入力"
  value="{roomForm.name}"
  on:input="{updateNameLength}"
/>
<div class="flex justify-end">{currentLength}/{maxLength}</div>
