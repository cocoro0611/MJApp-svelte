<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import FuroButton2 from "./FuroButton2.svelte";

  export const meta: Meta<FuroButton2> = {
    title: "features/Point-Hansuu/FuroButton2",
    component: FuroButton2,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { Toggle } from "flowbite-svelte";

  let han: number = 0;
  let count: number = 0;
  let isFuro: boolean = true;

  let furoButton2: FuroButton2;

  const clearValue = () => {
    han = 0;
    count = 0;
    furoButton2.resetItemsStores();
  };

  const onToggle = () => {
    isFuro = !isFuro;
    clearValue();
  };
</script>

<Story name="Default">
  <div class="p-4">
    <button class="text-blue-500 font-bold mx-4 mb-2" on:click="{clearValue}"
      >Clear</button
    >
    <Toggle color="blue" on:change="{onToggle}" />
    <div class="mt-4">
      <div>Total Han：{han}</div>
      <div>Count：{count}</div>
      <div>Is Furo：{isFuro ? "Yes" : "No"}</div>
    </div>
    <FuroButton2 bind:this="{furoButton2}" bind:han bind:count />
  </div>
</Story>
