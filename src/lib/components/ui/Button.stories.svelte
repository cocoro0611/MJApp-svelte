<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Button from "./Button.svelte";

  export const meta: Meta<Button> = {
    title: "UI/Button",
    component: Button,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <div class="grid grid-flow-cols-1 gap-2">
    <Button>primary</Button>
    <Button variant="{'secondary'}">secondary</Button>
    <Button variant="{'danger'}">danger</Button>
    <Button variant="{'cancel'}">cancel</Button>
    <Button width="{'short'}">short</Button>
    <Button disabled>disabled</Button>
  </div>
</Story>

<Story name="Plus">
  <Button isPlus />
</Story>
