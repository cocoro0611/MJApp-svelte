<script lang="ts">
  import type { User } from "$lib/models/interface.js";
  import FormField from "$lib/components/ui/FormField.svelte";
  import NameForm from "$lib/components/ui/NameForm.svelte";
  import MemberSelectForm from "$lib/components/ui/MemberSelectForm.svelte";

  export let isUpdate: boolean = false;
  export let isDelete: boolean = false;
  export let user: User;
</script>

{#if !isDelete}
  <FormField actions="{isUpdate ? 'updateUser' : 'createUser'}">
    <input type="hidden" name="id" value="{user.id}" />
    <NameForm bind:user maxLength="{5}" />
    <MemberSelectForm bind:user />
  </FormField>
{:else}
  <FormField actions="deleteUser">
    <input type="hidden" name="id" value="{user.id}" />
  </FormField>
{/if}
