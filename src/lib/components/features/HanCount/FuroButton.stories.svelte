<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import FuroButton from "./FuroButton.svelte";

  export const meta: Meta<FuroButton> = {
    title: "features/Point-Hansuu/FuroButton",
    component: FuroButton,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { Toggle } from "flowbite-svelte";

  let han: number = 0;
  let fu: number = 30;
  let isFuro: boolean = true;

  let furoButton: FuroButton;

  const clearValue = () => {
    han = 0;
    furoButton.resetItemsStores();
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
      <div>Is Furo：{isFuro ? "Yes" : "No"}</div>
    </div>
    <FuroButton bind:this="{furoButton}" bind:han bind:fu />
  </div>
</Story>
