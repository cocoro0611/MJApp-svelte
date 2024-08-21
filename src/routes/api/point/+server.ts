import type { RequestHandler } from "@sveltejs/kit";
import { calculateOyaRonPoint } from "./oyaRonPoint";
import { calculateOyaTumoPoint } from "./oyaTumoPoint";
import { calculateKoRonPoint } from "./koRonPoint";
import { calculateKoTumoPoint_oya } from "./koTumoPoint-oya";
import { calculateKoTumoPoint_ko } from "./koTumoPoint-ko";

export const GET: RequestHandler = async ({ url }) => {
  const fu = Number(url.searchParams.get("fu") ?? 0);
  const han = Number(url.searchParams.get("han") ?? 0);

  if (isNaN(fu) || isNaN(han)) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const oyaRonPoint = calculateOyaRonPoint(fu, han);
  const oyaTumoPoint = calculateOyaTumoPoint(fu, han);
  const koRonPoint = calculateKoRonPoint(fu, han);
  const koTumoPoint_oya = calculateKoTumoPoint_oya(fu, han);
  const koTumoPoint_ko = calculateKoTumoPoint_ko(fu, han);

  return new Response(
    JSON.stringify({
      oyaRonPoint,
      oyaTumoPoint,
      koRonPoint,
      koTumoPoint_oya,
      koTumoPoint_ko,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
