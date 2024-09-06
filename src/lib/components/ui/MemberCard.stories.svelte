<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberCard from "./MemberCard.svelte";

  export const meta: Meta<MemberCard> = {
    title: "UI/MemberCard",
    component: MemberCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <MemberCard image="/MemberIcon/monster01.png">井上</MemberCard>
</Story>

<Story name="isColor">
  <MemberCard isColor image="/MemberIcon/monster01.png">井上</MemberCard>
</Story>
