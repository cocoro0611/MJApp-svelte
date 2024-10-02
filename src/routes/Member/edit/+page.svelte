<script lang="ts">
  import Header from "$lib/components/layout/Header.svelte";
  import Main from "$lib/components/layout/Main.svelte";
  import Icon from "$lib/components/ui/Icon.svelte";
  import Form from "$lib/components/layout/Form.svelte";
  import MemberForm from "$lib/components/features/Member/MemberForm.svelte";

  import { currentPage } from "$lib/utils/pageStore.js";
  import type { UserData } from "$lib/models/Member/type.js";

  export let user: UserData;
</script>

<Header>
  <svelte:fragment slot="left">
    <Icon type="back" on:click="{() => ($currentPage = 'member')}" />
  </svelte:fragment>
  <svelte:fragment slot="center">メンバー編集</svelte:fragment>
  <svelte:fragment slot="right">
    <Form action="?/delete-user">
      <input type="hidden" name="id" value="{user.id}" />
    </Form>
  </svelte:fragment>
</Header>

<Main>
  <MemberForm action="?/update-user" {user} />
</Main>
