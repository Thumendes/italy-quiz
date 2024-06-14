import { Ranking } from "@/lib/ranking";
import { redirect } from "next/navigation";

export async function GET() {
  const ranking = await Ranking.create();

  await ranking.reset();

  return redirect("/");
}
