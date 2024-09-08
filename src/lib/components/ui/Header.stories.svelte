<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Header from "./Header.svelte";

  export const meta: Meta<Header> = {
    title: "UI/Header",
    component: Header,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  let pageType: "home" | "member" | "fusuu" | "hansuu";
</script>

<Story name="Default">
  <Header pageType="fusuu" />
</Story>

<Story name="Fu">
  <Header pageType="fusuu" />
</Story>

<Story name="Han">
  <Header pageType="hansuu" />
</Story>
