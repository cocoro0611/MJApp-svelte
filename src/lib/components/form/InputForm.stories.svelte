<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import InputForm from "./InputForm.svelte";

  export const meta: Meta<InputForm> = {
    title: "FORM/InputForm",
    component: InputForm,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let inputValue = "";

  function updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    inputValue = input.value;
  }
</script>

<Story name="Default">
  <InputForm
    name="default"
    placeholder="名前を入力"
    bind:value="{inputValue}"
    on:input="{updateValue}"
    maxlength="{10}"
  />
</Story>

<Story name="Number Input">
  <InputForm
    type="number"
    name="number"
    placeholder="数字を入力"
    value="{0}"
    on:input="{updateValue}"
  />
</Story>

<Story name="Custom Input">
  <InputForm
    name="gameAmount"
    type="number"
    placeholder="金額を入力"
    value="{0}"
    on:input="{updateValue}"
  >
    <span slot="left" class="text-gray-500">¥</span>
    <span slot="right" class="text-gray-500">円</span>
  </InputForm>
</Story>
