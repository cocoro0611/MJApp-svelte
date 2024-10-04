<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import DetailField from "./DetailField.svelte";

  export const meta: Meta<DetailField> = {
    title: "LAYOUT/DetailField",
    component: DetailField,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <DetailField name="スコア">メインのコンテンツ</DetailField>
</Story>
