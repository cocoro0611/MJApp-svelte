<script lang="ts">
  import { Toggle } from "flowbite-svelte";

  export let isChecked: boolean | undefined = undefined;
  export let onToggle: (() => void) | undefined = undefined;
  export let onClear: () => void;

  export let type: "han" | "fu";
</script>

<div class="flex justify-between px-4">
  <span
    >{#if type === "han"}
      <div class="flex">
        <div
          class="{isChecked ? 'text-gray-300' : 'text-blue-500'} mr-2 font-bold"
        >
          門前
        </div>
        <Toggle color="blue" on:change="{onToggle}" />
        <div class="{isChecked ? 'text-blue-500' : 'text-gray-300'}  font-bold">
          副露
        </div>
      </div>
    {/if}
  </span>
  <span>
    <button class="text-blue-500 font-bold mx-4" on:click="{onClear}"
      >Clear</button
    ></span
  >
</div>
