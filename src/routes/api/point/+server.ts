import type { RequestHandler } from "@sveltejs/kit";

import { calculateOyaRonPoint } from "./oyaRonPoint.js";
import { calculateOyaTumoPoint } from "./oyaTumoPoint.js";
import { calculateKoRonPoint } from "./koRonPoint.js";
import { calculateKoTumoPoint_oya } from "./koTumoPoint-oya.js";
import { calculateKoTumoPoint_ko } from "./koTumoPoint-ko.js";

export const GET: RequestHandler = async ({ url }) => {
  const fu = Number(url.searchParams.get("fu") ?? 0);
  const han = Number(url.searchParams.get("han") ?? 0);

  if (isNaN(fu) || isNaN(han)) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const result = {
      oyaRonPoint: calculateOyaRonPoint(fu, han),
      oyaTumoPoint: calculateOyaTumoPoint(fu, han),
      koRonPoint: calculateKoRonPoint(fu, han),
      koTumoPoint_oya: calculateKoTumoPoint_oya(fu, han),
      koTumoPoint_ko: calculateKoTumoPoint_ko(fu, han),
    };
    return new Response(JSON.stringify(result));
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred while calculating points." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
