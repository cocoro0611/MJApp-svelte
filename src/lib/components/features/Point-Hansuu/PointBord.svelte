<script lang="ts">
  export let fu: number | null = 30;
  export let han: number | null = 1;
  export let oyaRonPoint: number | null = 1500;
  export let oyaTumoPoint: number | null = 500;
  export let koRonPoint: number | null = 1000;
  export let koTumoPoint_oya: number | null = 500;
  export let koTumoPoint_ko: number | null = 300;

  function formatValue(value: number | null | undefined): string {
    if (value === null) return "-";
    if (value === undefined) return "0";
    return `${value}`;
  }

  function formatMainScore(value: number | null | undefined): string {
    if (value === null) return "-";
    if (value === undefined) return "0";
    if (value === 8000) return "満貫";
    if (value === 12000) return "跳満";
    if (value === 16000) return "倍満";
    if (value === 24000) return "三倍満";
    if (value === 32000) return "役満";
    if (value === 64000) return "二倍役満";
    if (value === 96000) return "三倍役満";
    if (value === 128000) return "四倍役満";
    if (value === 160000) return "五倍役満";
    if (value === 192000) return "六倍役満";
    if (value === 224000) return "七倍役満";
    return `${value}点`;
  }
</script>

<div class="flex justify-center text-sm font-bold text-blue-500 gap-6">
  <span>{formatValue(fu)} 符</span>
  <span>{formatValue(han)} 翻</span>
</div>
<div class="flex justify-center text-xl font-bold">
  {formatMainScore(koRonPoint)}
</div>
<div class="flex justify-center text-sm font-bold">
  <span>親：</span>
  <span>{formatValue(oyaRonPoint)}</span>
  <span>（{formatValue(oyaTumoPoint)}）</span>
</div>
<div class="flex justify-center text-sm font-bold">
  <span>子：</span>
  <span>{formatValue(koRonPoint)}</span>
  <span>（{formatValue(koTumoPoint_oya)}/{formatValue(koTumoPoint_ko)}）</span>
</div>
