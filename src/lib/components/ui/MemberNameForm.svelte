<script lang="ts">
  import type { User } from "$lib/models/interface.js";
  import { Input } from "flowbite-svelte";

  export let user: User;
  let maxLength: number = 5;

  const updateNameLength = (event: Event) => {
    const input = event.target as HTMLInputElement;
    user.name = input.value;
  };

  $: currentLength = user.name.length;
</script>

<div class="font-bold py-1">名前</div>
<Input
  class="border border-blue-500"
  name="name"
  placeholder="名前を入力"
  value="{user.name}"
  on:input="{updateNameLength}"
/>
<div class="flex justify-end">{currentLength}/{maxLength}</div>
