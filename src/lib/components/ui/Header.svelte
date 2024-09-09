<script lang="ts">
  export let pageType: "home" | "member" | "fusuu" | "hansuu";
  export let isScorePage: Boolean;

  import Icon from "./Icon.svelte";

  const handleBackPage = () => {
    isScorePage = false;
  };
</script>

<div
  class="fixed top-0 left-0 right-0 z-10 bg-blue-800 py-6 font-bold text-xl text-white flex justify-center"
>
  {#if isScorePage === false}
    {#if pageType === "home"}
      麻雀スコア
    {:else if pageType === "member"}
      メンバー
    {:else if pageType === "fusuu"}
      符数計算
    {:else if pageType === "hansuu"}
      翻数計算
    {/if}
  {/if}
  {#if isScorePage === true}
    <div class="flex items-center justify-between w-full">
      <button class="ml-4" on:click="{handleBackPage}">
        <Icon type="back" />
      </button>
      <div class="flex-1 text-center">ここに部屋名</div>
      <div class="mr-4"></div>
    </div>
  {/if}
</div>

<div class="mt-[4.5rem]"></div>
