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
  <div class="bg-blue-800">
    <Icon iconType="close" />
    <Icon iconType="back" />
    <Icon iconType="delete" />
    <Icon iconType="room" />
    <Icon iconType="user" />
    <Icon iconType="calculator" />
    <Icon iconType="calculatorFilled" />
    <Icon iconType="refresh" />
  </div>
</Story>
