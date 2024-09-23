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

  let image = "/MemberIcon/monster01.png";
  let name = "井上";
</script>

<Story name="Default">
  <MemberCard {image} {name} />
  <MemberCard isLarge {image} {name} />
</Story>
