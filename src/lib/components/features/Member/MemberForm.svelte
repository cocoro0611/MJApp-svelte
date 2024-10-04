<script lang="ts">
  import Form from "$lib/components/layout/Form.svelte";
  import FormField from "$lib/components/layout/FormField.svelte";
  import InputForm from "$lib/components/form/InputForm.svelte";
  import MemberSelectForm from "$lib/components/form/MemberSelectForm.svelte";

  import type { UserData } from "$lib/models/Member/type.js";

  export let user: UserData;
  export let action = "";

  const updateUserName = (event: CustomEvent<string>) => {
    user.name = event.detail;
  };
</script>

<Form {action}>
  <input type="hidden" name="id" value="{user.id}" />
  <FormField name="名前">
    <InputForm
      name="name"
      placeholder="名前を入力"
      bind:value="{user.name}"
      on:input="{updateUserName}"
      maxlength="{5}"
    />
  </FormField>
  <FormField name="アイコン">
    <MemberSelectForm bind:user />
  </FormField>
</Form>
