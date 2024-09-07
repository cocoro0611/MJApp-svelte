<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Icon from "./Icon.svelte";

  export const meta: Meta<Icon> = {
    title: "UI/Icon",
    component: Icon,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Icon type="home" />
  <Icon type="user" />
  <Icon type="calculator" />
  <Icon type="calculatorFilled" />
</Story>
