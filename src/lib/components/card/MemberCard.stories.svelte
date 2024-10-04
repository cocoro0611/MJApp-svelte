<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import MemberCard from "./MemberCard.svelte";

  export const meta: Meta<MemberCard> = {
    title: "CARD/MemberCard",
    component: MemberCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <div class="grid grid-flow-cols-1 gap-2">
    <MemberCard size="small" name="井上" image="hogehoge" />
    <MemberCard name="井上" image="hogehoge" />
    <MemberCard size="large" name="井上" image="hogehoge" />
  </div>
</Story>

<Story name="IsScore">
  <MemberCard
    isColor="{false}"
    isScore
    name="井上"
    image="hogehoge"
    totalScore="{-5}"
  />
</Story>

<Story name="IsSelect">
  <MemberCard isSelectAction size="small" name="井上" image="hogehoge" />
  <MemberCard
    isSelectAction
    isSelected
    size="small"
    name="井上"
    image="hogehoge"
  />
</Story>
