<script lang="ts">
  import type { User } from "$lib/models/interface.js";
  import FormField from "$lib/components/layout/FormField.svelte";
  import NameForm from "$lib/components/ui/NameForm.svelte";
  import MemberSelectForm from "$lib/components/ui/MemberSelectForm.svelte";

  export let isUpdate: boolean = false;
  export let isDelete: boolean = false;
  export let user: User;
</script>

{#if !isDelete}
  <FormField actions="{isUpdate ? 'updateUser' : 'createUser'}">
    <input type="hidden" name="id" value="{user.id}" />
    <div class="font-bold py-1">名前</div>
    <NameForm bind:user maxLength="{5}" />
    <div class="font-bold py-1">アイコン</div>
    <MemberSelectForm bind:user />
  </FormField>
{:else}
  <FormField actions="deleteUser">
    <input type="hidden" name="id" value="{user.id}" />
  </FormField>
{/if}
