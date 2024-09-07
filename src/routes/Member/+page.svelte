<script lang="ts">
  import type { User } from "$lib/models/Member/types.js";

  interface PageData {
    user: User[];
  }

  export let data: PageData;

  $: ({ user } = data);
</script>

<form method="POST" action="?/createForm">
  <input
    type="text"
    name="name"
    placeholder="ユーザー名"
    class="border p-2 mr-2"
  />
  <input
    type="text"
    name="icon"
    placeholder="アイコンURL"
    class="border p-2 mr-2"
  />
  <button type="submit" class="bg-blue-500 text-white h-10 w-20 rounded"
    >テストボタン</button
  >
</form>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">ユーザーリスト</h1>

  {#if user && user.length > 0}
    <ul class="space-y-4">
      {#each user as { name, icon }}
        <li class="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
          <div class="flex-shrink-0 h-12 w-12">
            <img
              class="h-12 w-12 rounded-full"
              src="{icon}"
              alt="{name}のアイコン"
            />
          </div>
          <div>
            <p class="text-lg font-medium text-gray-900">{name}</p>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="text-gray-500">ユーザーが見つかりません。</p>
  {/if}
</div>
