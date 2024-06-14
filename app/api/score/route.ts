import { Ranking } from "@/lib/ranking";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, score } = await req.json();

  const ranking = await Ranking.create();
  const rankingUser = await ranking.saveScore(id, score);

  cookies().delete("id");

  return NextResponse.json(rankingUser);
}
