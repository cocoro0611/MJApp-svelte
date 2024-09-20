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
</script>

<Story name="Default">
  <Header>
    <svelte:fragment slot="left">左</svelte:fragment>
    <svelte:fragment slot="center">中央</svelte:fragment>
    <svelte:fragment slot="right">右</svelte:fragment>
  </Header>
</Story>

<Story name="isContents">
  <Header isContents>
    <svelte:fragment slot="left">左</svelte:fragment>
    <svelte:fragment slot="center">中央</svelte:fragment>
    <svelte:fragment slot="right">右</svelte:fragment>
    ここにコンテンツが入る
  </Header>
</Story>
