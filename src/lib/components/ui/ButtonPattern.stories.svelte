<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import ButtonPattern from "./ButtonPattern.svelte";

  export const meta: Meta<ButtonPattern> = {
    title: "UI/ButtonPattern",
    component: ButtonPattern,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let count: number = 0;

  const countButton = () => {
    count += 1;
  };
</script>

<Story name="Default">
  <ButtonPattern pattern="default" on:click="{countButton}" />
  <ButtonPattern pattern="update" on:click="{countButton}" />
  <div class="flex justify-center mt-6 gap-2">
    <ButtonPattern pattern="delete" on:click="{countButton}" />
  </div>
  <div class="p-4">クリック数：{count}回</div>
</Story>
