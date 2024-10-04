<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import CountCard from "./CountCard.svelte";

  export const meta: Meta<CountCard> = {
    title: "CARD/CountCard",
    component: CountCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <CountCard totalValue="{100}" />
  <CountCard totalValue="{0}" />
  <CountCard inputType="chip" totalValue="{100}" />
  <CountCard inputType="chip" totalValue="{0}" />
</Story>
