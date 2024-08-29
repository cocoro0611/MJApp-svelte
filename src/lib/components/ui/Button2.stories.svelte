<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Button2 from "./Button2.svelte";

  export const meta: Meta<Button2> = {
    title: "UI/Button2",
    component: Button2,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { IconUserMinus } from "@tabler/icons-svelte";

  let isSelected: boolean;
  let count: number = 0;

  const countButton = () => {
    count += 1;
  };

  const onButton = () => {
    isSelected = !isSelected;
  };
</script>

<Story name="Default">
  <div>カウント</div>
  <Button2 type="button" on:click="{countButton}">選択する</Button2>
  <div class="p-4">クリック数：{count}回</div>
</Story>

<Story name="Active">
  <div>クリックで選択</div>
  <Button2 bind:isSelected on:click="{onButton}">立直</Button2>
</Story>

<Story name="Icon">
  <div>クリックで選択</div>
  <Button2 isIcon bind:isSelected on:click="{onButton}">
    <IconUserMinus slot="icon" />
    ユーザー
  </Button2>
</Story>
