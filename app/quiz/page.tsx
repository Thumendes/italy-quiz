import { cookies } from "next/headers";
import { QuizForm } from "./form";
import { redirect } from "next/navigation";

export default async function QuizPage() {
  const id = cookies().get("id")?.value;

  if (!id) {
    return redirect("/");
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="container max-w-screen-sm mx-auto space-y-8">
        <header>
          <h1 className="text-2xl font-semibold mb-2">Quiz Italy 🇮🇹</h1>
        </header>

        <QuizForm id={id} />
      </div>
    </main>
  );
}
