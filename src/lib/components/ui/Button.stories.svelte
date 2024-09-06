<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Button from "./Button.svelte";

  export const meta: Meta<Button> = {
    title: "UI/Button",
    component: Button,
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
  <Button type="button1" on:click="{countButton}">選択する</Button>
  <Button type="button2" on:click="{countButton}">閉じる</Button>
  <div class="p-4">クリック数：{count}回</div>
</Story>

<Story name="Active">
  <div>クリックで選択</div>
  <Button bind:isSelected on:click="{onButton}">立直</Button>
  <Button isWide bind:isSelected on:click="{onButton}">30000点</Button>
</Story>

<Story name="Icon">
  <div>クリックで選択</div>
  <Button isIcon bind:isSelected on:click="{onButton}">
    <IconUserMinus slot="icon" />
    ユーザー
  </Button>
</Story>
