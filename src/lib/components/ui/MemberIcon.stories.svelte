<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberIcon from "./MemberIcon.svelte";

  export const meta: Meta<MemberIcon> = {
    title: "UI/MemberIcon",
    component: MemberIcon,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  let isSelected: boolean;

  const onButton = () => {
    isSelected = !isSelected;
  };
</script>

<Story name="Default">
  <MemberIcon
    bind:isSelected
    on:click="{onButton}"
    image="/MemberIcon/monster01.png"
  />
</Story>
