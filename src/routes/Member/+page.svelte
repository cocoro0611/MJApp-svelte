<script lang="ts">
  export let data;

  import Modal from "$lib/components/ui/Modal.svelte";
  import MemberSummary from "$lib/components/features/Member/MemberSummary.svelte";
  import MemberCreate from "$lib/components/features/Member/MemberCreate.svelte";

  let popupModal = false;

  const handleSubmit = async (event: CustomEvent) => {
    // フォームの送信をハンドル
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        // 送信成功時の処理
        popupModal = false; // モーダルを閉じる
        // 必要に応じてデータを更新
      } else {
        // エラー処理
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
</script>

<MemberSummary
  data="{[
    { name: '井上', icon: 'monster01.png' },
    { name: '山本', icon: 'monster02.png' },
    { name: '太郎', icon: 'monster03.png' },
    { name: '太郎', icon: 'monster04.png' },
    { name: '太郎', icon: 'monster05.png' },
    { name: '太郎', icon: 'monster06.png' },
    { name: '太郎', icon: 'monster07.png' },
    { name: '太郎', icon: 'monster08.png' },
    { name: '太郎', icon: 'monster09.png' },
    { name: '太郎', icon: 'monster10.png' },
    { name: '太郎', icon: 'monster11.png' },
    { name: '太郎', icon: 'monster12.png' },
  ]}"
/>

<div class="fixed bottom-24 right-10 z-10">
  <Modal bind:popupModal>
    <MemberCreate {data} on:submit="{handleSubmit}" />
  </Modal>
</div>

<!-- <form method="POST" action="?/createForm">
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
</div> -->
