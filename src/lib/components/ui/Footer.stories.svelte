<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Footer from "./Footer.svelte";

  export const meta: Meta<Footer> = {
    title: "UI/Footer",
    component: Footer,
  };
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <Footer />
</Story>
