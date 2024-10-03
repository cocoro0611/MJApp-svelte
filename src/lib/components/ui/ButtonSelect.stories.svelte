<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ButtonSelect from "./ButtonSelect.svelte";

  export const meta: Meta<ButtonSelect> = {
    title: "UI/ButtonSelect",
    component: ButtonSelect,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <div class="grid grid-flow-cols-1 gap-2">
    <ButtonSelect>notSel</ButtonSelect>
    <ButtonSelect isSelected>Sel</ButtonSelect>
    <ButtonSelect width="short">short</ButtonSelect>
    <ButtonSelect width="long">long</ButtonSelect>
  </div>
</Story>

<Story name="Count">
  <ButtonSelect isSelected count="{4}">
    count
    <svelte:fragment slot="countName">翻</svelte:fragment>
  </ButtonSelect>
</Story>

<Story name="Icon">
  <ButtonSelect image="monster01.png" />
  <ButtonSelect isSelected image="monster01.png" />
</Story>
