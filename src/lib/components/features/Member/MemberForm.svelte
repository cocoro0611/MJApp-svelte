<script lang="ts">
  import Form from "$lib/components/layout/Form.svelte";
  import FormField from "$lib/components/layout/FormField.svelte";
  import MemberNameForm from "$lib/components/form/MemberNameForm.svelte";
  import MemberSelectForm from "$lib/components/form/MemberSelectForm.svelte";

  import type { UserData } from "$lib/models/Member/type.js";

  export let user: UserData;
  export let action;
</script>

<Form {action}>
  <input type="hidden" name="id" value="{user.id}" />
  <FormField name="名前">
    <MemberNameForm bind:user />
  </FormField>
  <FormField name="アイコン">
    <MemberSelectForm bind:user />
  </FormField>
</Form>
