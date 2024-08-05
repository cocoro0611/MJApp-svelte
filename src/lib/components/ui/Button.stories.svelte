<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Button from "./Button.svelte";

  export const meta: Meta<Button> = {
    title: "UI/Button",
    component: Button,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <div class="grid grid-cols-1 gap-2">
    <p><Button>filled</Button></p>
    <p><Button flat>borderless</Button></p>
    <p><Button variant="secondary">secondary</Button></p>
    <p><Button variant="fine">fine</Button></p>
    <p><Button variant="info">info</Button></p>
    <p><Button variant="danger">danger</Button></p>
  </div>
</Story>
