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
  <Icon iconType="back" />
  <Icon iconType="delete" />
  <Icon iconType="refresh" />
  <Icon iconType="room" />
  <Icon iconType="user" />
  <Icon iconType="calculator" />
  <Icon iconType="calculatorFilled" />
</Story>
