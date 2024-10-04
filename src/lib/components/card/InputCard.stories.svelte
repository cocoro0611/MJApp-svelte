<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import InputCard from "./InputCard.svelte";

  export const meta: Meta<InputCard> = {
    title: "CARD/InputCard",
    component: InputCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <InputCard inputValue="{100}" />
  <InputCard isSelected inputValue="{100}" />
  <InputCard inputType="chip" inputValue="{20}" />
</Story>
