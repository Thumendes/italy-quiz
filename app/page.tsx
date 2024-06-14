import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ranking } from "@/lib/ranking";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  async function startScore(formData: FormData) {
    "use server";

    const user = ranking.add({
      name: formData.get("name") as string,
      score: 0,
    });

    cookies().set("id", user.id);

    redirect("/quiz");
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="container max-w-screen-sm mx-auto space-y-8">
        <header>
          <h1 className="text-2xl font-semibold mb-2">Quiz Italy 🇮🇹</h1>
          <p className="text-muted-foreground">Venha descobrir o seu conhecimento sobre a cultura italiana!</p>
        </header>

        <Table>
          <TableCaption>Classificação do Ranking</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Pontuação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ranking.getOrdered().map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell className="text-right">{user.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <footer>
          <form action={startScore} className="flex items-center gap-4">
            <Input name="name" placeholder="Seu nome" />
            <Button type="submit">Começar novo quiz</Button>
          </form>
        </footer>
      </div>
    </main>
  );
}
