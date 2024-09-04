<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MenzenButton2 from "./MenzenButton2.svelte";

  export const meta: Meta<MenzenButton2> = {
    title: "features/Point-Hansuu/MenzenButton2",
    component: MenzenButton2,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { Toggle } from "flowbite-svelte";

  let han: number = 0;
  let count: number = 0;
  let isFuro: boolean = true;

  let menzenButton2: MenzenButton2;

  const clearValue = () => {
    han = 0;
    count = 0;
    menzenButton2.resetItemsStores();
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
    <MenzenButton2 bind:this="{menzenButton2}" bind:han bind:count />
  </div>
</Story>
