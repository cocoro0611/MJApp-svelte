<script lang="ts">
  import type { PointData } from "$lib/models/interface.js";

  export let pointData: PointData;

  const POINT_NAMES: [number, string][] = [
    [224000, "七倍役満"],
    [192000, "六倍役満"],
    [160000, "五倍役満"],
    [128000, "四倍役満"],
    [96000, "三倍役満"],
    [64000, "二倍役満"],
    [32000, "役満"],
    [24000, "三倍満"],
    [16000, "倍満"],
    [12000, "跳満"],
    [8000, "満貫"],
  ];

  const formatPoint = (value: number | null | undefined): string => {
    if (value === null) return "-";
    if (value === undefined) return "0";
    return `${value}`;
  };

  const formatPointMain = (value: number | null | undefined): string => {
    if (value === null) return "-";
    if (value === undefined) return "0点";
    for (const [points, name] of POINT_NAMES) {
      if (value === points) return name;
    }
    return `${value}点`;
  };
</script>

<div class="flex justify-center text-xl font-bold">
  {formatPointMain(pointData.koRonPoint)}
</div>
<div class="flex justify-center text-sm font-bold">
  <ul>
    <li>
      親：{formatPoint(pointData.oyaRonPoint)}（{formatPoint(
        pointData.oyaTumoPoint,
      )} All）
    </li>
    <li>
      子：{formatPoint(pointData.koRonPoint)}（{formatPoint(
        pointData.koTumoPoint_oya,
      )}/{formatPoint(pointData.koTumoPoint_ko)}）
    </li>
  </ul>
</div>
