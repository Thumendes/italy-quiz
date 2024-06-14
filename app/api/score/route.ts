import { ranking } from "@/lib/ranking";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, score } = await req.json();

  const rankingUser = ranking.saveScore(id, score);

  cookies().delete("id");

  return NextResponse.json(rankingUser);
}
