<script lang="ts">
  export let pageType: "home" | "member" | "fusuu" | "hansuu";
</script>

<div
  class="fixed top-0 left-0 right-0 z-10 bg-blue-800 py-4 font-bold text-xl text-white flex justify-center"
>
  {#if pageType === "home"}
    麻雀スコア
  {:else if pageType === "member"}
    メンバー
  {:else if pageType === "fusuu"}
    符数計算
  {:else if pageType === "hansuu"}
    翻数計算
  {/if}
</div>

<div class="mt-[3rem]"></div>
