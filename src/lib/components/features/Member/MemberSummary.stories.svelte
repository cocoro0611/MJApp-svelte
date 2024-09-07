<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberSummary from "./MemberSummary.svelte";

  export const meta: Meta<MemberSummary> = {
    title: "features/Member/MemberSummary",
    component: MemberSummary,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <MemberSummary
    data="{[
      { name: '井上', icon: 'monster01.png' },
      { name: '山本', icon: 'monster02.png' },
      { name: '太郎', icon: 'monster03.png' },
      { name: '太郎', icon: 'monster04.png' },
      { name: '太郎', icon: 'monster05.png' },
      { name: '太郎', icon: 'monster06.png' },
      { name: '太郎', icon: 'monster07.png' },
      { name: '太郎', icon: 'monster08.png' },
      { name: '太郎', icon: 'monster09.png' },
      { name: '太郎', icon: 'monster10.png' },
      { name: '太郎', icon: 'monster11.png' },
      { name: '太郎', icon: 'monster12.png' },
    ]}"
  />
</Story>
