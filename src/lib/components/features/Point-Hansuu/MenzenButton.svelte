<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";

  export let han: number;
</script>

<div class="flex justify-center">
  <div>
    <div class="py-2 font-bold">１翻役</div>
    <div class="flex gap-2">
      <Button bind:han value="{1}">立直</Button>
      <Button bind:han value="{1}">一発</Button>
      <Button bind:han value="{1}">門前清自摸和</Button>
      <Button bind:han value="{1}">白</Button>
      <Button bind:han value="{1}">發</Button>
      <Button bind:han value="{1}">中</Button>
    </div>
    <div class="flex gap-2 my-2">
      <Button bind:han value="{1}">自風牌</Button>
      <Button bind:han value="{1}">場風牌</Button>
      <Button bind:han value="{1}">断幺九</Button>
      <Button bind:han value="{1}">平和</Button>
      <Button bind:han value="{1}">一盃口</Button>
      <Button bind:han value="{1}">海底　摸月</Button>
    </div>
    <div class="flex gap-2 my-2">
      <Button bind:han value="{1}">河底　撈魚</Button>
      <Button bind:han value="{1}">嶺上　開花</Button>
      <Button bind:han value="{1}">槍槓</Button>
      <!-- TODO：ドラの管理 -->
      <Button bind:han value="{1}">ドラ</Button>
    </div>

    <div class="py-2 font-bold">２翻役</div>
    <div class="flex gap-2">
      <Button bind:han value="{2}">ダブル立直</Button>
      <Button bind:han value="{2}">三色　同順</Button>
      <Button bind:han value="{2}">三色　同刻</Button>
      <Button bind:han value="{2}">三暗刻</Button>
      <Button bind:han value="{2}">一気　通貫</Button>
      <Button bind:han value="{2}">七対子</Button>
    </div>
    <div class="flex gap-2 my-2">
      <Button bind:han value="{2}">対々和</Button>
      <Button bind:han value="{2}">混全帯么九</Button>
      <Button bind:han value="{2}">三槓子</Button>
      <Button bind:han value="{2}">小三元</Button>
      <Button bind:han value="{2}">混老頭</Button>
    </div>

    <div class="py-2 font-bold">３翻役</div>
    <div class="flex gap-2">
      <Button bind:han value="{3}">二盃口</Button>
      <Button bind:han value="{3}">純全帯么九</Button>
      <Button bind:han value="{3}">混一色</Button>
    </div>

    <div class="py-2 font-bold">６翻役</div>
    <div class="flex gap-2">
      <Button bind:han value="{6}">清一色</Button>
    </div>

    <div class="py-2 font-bold">役満</div>
    <div class="flex gap-2">
      <Button bind:han value="{13}">天和</Button>
      <Button bind:han value="{13}">地和</Button>
      <Button bind:han value="{13}">人和</Button>
      <Button bind:han value="{13}">四暗刻</Button>
      <Button bind:han value="{13}">国士　無双</Button>
      <Button bind:han value="{13}">九蓮　宝燈</Button>
    </div>
    <div class="flex gap-2 my-2">
      <Button bind:han value="{13}">大三元</Button>
      <Button bind:han value="{13}">緑一色</Button>
      <Button bind:han value="{13}">字一色</Button>
      <Button bind:han value="{13}">清老頭</Button>
      <Button bind:han value="{13}">四槓子</Button>
      <Button bind:han value="{13}">小四喜</Button>
    </div>

    <div class="py-2 font-bold">ダブル役満</div>
    <div class="flex gap-2">
      <Button bind:han value="{26}">四暗刻単騎</Button>
      <Button bind:han value="{26}">大四喜</Button>
      <Button bind:han value="{26}">純正九蓮宝燈</Button>
      <Button bind:han value="{26}">
        <div class="text-xs">国士無双十三面待ち</div>
      </Button>
    </div>
  </div>
</div>
