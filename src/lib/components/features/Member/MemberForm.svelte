<script lang="ts">
  import type { UserData } from "$lib/models/Member/type.js";
  import Form from "$lib/components/layout/Form.svelte";
  import FormField from "$lib/components/layout/FormField.svelte";
  import MemberNameForm from "$lib/components/ui/MemberNameForm.svelte";
  import MemberSelectForm from "$lib/components/ui/MemberSelectForm.svelte";

  export let isUpdate: boolean = false;
  export let isDelete: boolean = false;
  export let user: UserData;
</script>

{#if !isDelete}
  <Form actions="{isUpdate ? 'updateUser' : 'createUser'}">
    <input type="hidden" name="id" value="{user.id}" />
    <FormField name="名前">
      <MemberNameForm bind:user />
    </FormField>
    <FormField name="アイコン">
      <MemberSelectForm bind:user />
    </FormField>
  </Form>
{:else}
  <Form actions="deleteUser">
    <input type="hidden" name="id" value="{user.id}" />
  </Form>
{/if}
