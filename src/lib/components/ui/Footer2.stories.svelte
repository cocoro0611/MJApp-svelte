<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Footer2 from "./Footer2.svelte";

  export const meta: Meta<Footer2> = {
    title: "UI/Footer2",
    component: Footer2,
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
  <Footer2 bind:currentPage on:click="{handlePageChange}" />
  <p>Current page: {currentPage}</p>
</Story>
