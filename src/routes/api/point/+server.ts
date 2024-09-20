import type { RequestHandler } from "@sveltejs/kit";

import { calculateOyaRonPoint } from "./oyaRonPoint.js";
import { calculateOyaTumoPoint } from "./oyaTumoPoint.js";
import { calculateKoRonPoint } from "./koRonPoint.js";
import { calculateKoTumoPoint_oya } from "./koTumoPoint-oya.js";
import { calculateKoTumoPoint_ko } from "./koTumoPoint-ko.js";

export const GET: RequestHandler = async ({ url }) => {
  const fu = parseInt(url.searchParams.get("fu") ?? "", 10);
  const han = parseInt(url.searchParams.get("han") ?? "", 10);

  const result = {
    oyaRonPoint: calculateOyaRonPoint(fu, han),
    oyaTumoPoint: calculateOyaTumoPoint(fu, han),
    koRonPoint: calculateKoRonPoint(fu, han),
    koTumoPoint_oya: calculateKoTumoPoint_oya(fu, han),
    koTumoPoint_ko: calculateKoTumoPoint_ko(fu, han),
  };
  return new Response(JSON.stringify(result));  
};
