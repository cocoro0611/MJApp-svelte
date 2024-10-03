<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Footer from "./Footer.svelte";

  export const meta: Meta<Footer> = {
    title: "UI/Footer",
    component: Footer,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  import { currentPage } from "$lib/utils/pageStore.js";
</script>

<Story name="Default">
  <Footer />
  <div>Current page: {$currentPage}</div>
</Story>
