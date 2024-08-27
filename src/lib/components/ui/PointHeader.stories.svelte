<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import PointHeader from "./PointHeader.svelte";

  export const meta: Meta<PointHeader> = {
    title: "UI/PointHeader",
    component: PointHeader,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  let buttonStates: { [key: string]: boolean } = {};
  let doraCount: { [key: string]: number } = {};

  let fu: number = 30;
  let han: number = 0;
  let isChecked: boolean = false;

  function clearHan() {
    han = 0;
    fu = 30;
    Object.keys(buttonStates).forEach((key) => {
      buttonStates[key] = false;
    });
    Object.keys(doraCount).forEach((key) => {
      doraCount[key] = 0;
    });
  }

  function handleToggle() {
    isChecked = !isChecked;
    clearHan();
  }
</script>

<Story name="Default">
  <PointHeader onClear="{clearHan}" type="han" />
</Story>

<Story name="IsToggle">
  <PointHeader
    bind:isChecked
    onToggle="{handleToggle}"
    onClear="{clearHan}"
    type="fu"
  />
</Story>
