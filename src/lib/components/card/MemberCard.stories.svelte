<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";
  import MemberCard from "$lib/components/card/MemberCard.svelte";

  export const meta: Meta<MemberCard> = {
    title: "CARD/MemberCard",
    component: MemberCard,
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";

  let image = "/MemberIcon/monster01.png";
  let name = "井上";
</script>

<Story name="Default">
  <MemberCard {image} {name} />
  <MemberCard size="large" {image} {name} />
</Story>
