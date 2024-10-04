<script lang="ts" context="module">
  import type { Meta } from "@storybook/svelte";

  import Grid from "./Grid.svelte";

  export const meta: Meta<Grid> = {
    title: "LAYOUT/Grid",
    component: Grid,
  };
</script>

<script lang="ts" generics="T">
  import { Story } from "@storybook/addon-svelte-csf";
  import sampleData from "$lib/components/sampleData.json";
</script>

<Story name="Default">
  <Grid rightContentes="{sampleData.room.users}">
    <svelte:fragment slot="leftContent">名前</svelte:fragment>
    <svelte:fragment slot="rightContent" let:rightContent="{roomUser}">
      <div class="flex justify-center text-red-500 text-sm font-bold">
        -{sampleData.room.gameAmount / 4} P
      </div>
    </svelte:fragment>
  </Grid>
</Story>
