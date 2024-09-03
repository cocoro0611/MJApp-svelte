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

  let currentPage: "home" | "member" | "fusuu" | "hansuu";

  const handlePageChange = (page: CustomEvent<typeof currentPage>) => {
    currentPage = page.detail;
  };
</script>

<Story name="Default">
  <Footer bind:currentPage on:click="{handlePageChange}" />
  <p>Current page: {currentPage}</p>
</Story>
