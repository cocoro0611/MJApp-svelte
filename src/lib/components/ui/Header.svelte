<script lang="ts">
  type PageType = "home" | "member" | "fuCount" | "hanCount";

  export let pageType: PageType;

  const pageTitles: Record<PageType, string> = {
    home: "麻雀スコア",
    member: "メンバー",
    fuCount: "符数計算",
    hanCount: "翻数計算",
  };
</script>

<header class="fixed top-0 left-0 right-0 z-10 bg-blue-800">
  <div class="max-w-screen-xl mx-auto">
    <div class="py-6 font-bold text-xl text-white text-center">
      {pageTitles[pageType]}
    </div>
  </div>
</header>

<div class="mt-20"></div>
<!-- ヘッダーの高さに応じて調整 -->
