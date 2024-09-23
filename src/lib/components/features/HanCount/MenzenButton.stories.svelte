<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MenzenButton from "./MenzenButton.svelte";

  export const meta: Meta<MenzenButton> = {
    title: "features/Point-Hansuu/MenzenButton",
    component: MenzenButton,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { Toggle } from "flowbite-svelte";

  let han: number = 0;
  let fu: number = 30;
  let isFuro: boolean = true;

  let menzenButton: MenzenButton;

  const clearValue = () => {
    han = 0;
    menzenButton.resetItemsStores();
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
    <MenzenButton bind:this="{menzenButton}" bind:han bind:fu />
  </div>
</Story>
