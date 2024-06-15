"use client";

import { Button } from "@/components/ui/button";
import { cn, delay } from "@/lib/utils";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { quiz } from "./data";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

interface QuizFormProps {
  id: string;
}

export function QuizForm({ id }: QuizFormProps) {
  const router = useRouter();

  const [currentItem, setCurrentItem] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { height, width } = useWindowSize();
  const [isParty, setIsParty] = useState(false);

  async function triggerConfetti() {
    setIsParty(true);
    await delay(2000);
    setIsParty(false);
  }

  const currentQuizItem = quiz[currentItem];

  async function checkAnswer() {
    const isCorrect = answers[currentItem] === currentQuizItem.options[currentQuizItem.answer];

    if (isCorrect) {
      setStatus(true);
      setScore((prev) => prev + 1);
    } else {
      setStatus(false);
    }

    await delay(1000);

    setStatus(null);
    const nextItem = currentItem + 1;

    if (nextItem >= quiz.length) {
      setFinished(true);
      await triggerConfetti();
      return;
    }

    setCurrentItem((prev) => prev + 1);
  }

  async function handleFinish() {
    await fetch(`/api/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, score }),
    });

    router.push("/");
  }

  return (
    <div className="space-y-6">
      {finished ? (
        <div className="flex flex-col space-y-4 items-center justify-center">
          <CheckCircledIcon className="size-16 text-green-500" />

          <p className="text-2xl font-semibold">
            You got {score} of {quiz.length} right!
          </p>

          <p className="text-lg text-muted-foreground">
            {score === quiz.length
              ? "Congratulations! You got all the questions right."
              : "Try again to get all questions correct."}
          </p>

          <Button size="lg" onClick={handleFinish}>
            Get back to Ranking
          </Button>
        </div>
      ) : (
        <>
          <div className="flex  justify-between">
            <p className="text-2xl">{currentQuizItem.question}</p>
          </div>

          <ul className="space-y-3">
            {currentQuizItem.options.map((option, index) => {
              const selected = answers[currentItem] === option;

              return (
                <li
                  key={index}
                  onClick={() =>
                    setAnswers((prev) => {
                      const newAnswers = [...prev];
                      newAnswers[currentItem] = option;
                      return newAnswers;
                    })
                  }
                  className={cn(
                    "border px-4 py-3 rounded-md cursor-pointer",
                    selected && "bg-muted font-semibold",
                    typeof status === "boolean" &&
                      selected &&
                      (status ? "border-green-500 bg-green-500 text-white" : "border-red-500 bg-red-500 text-white")
                  )}
                >
                  {option}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-between">
            <div className="text-start">
              <p className="text-sm text-muted-foreground">Score</p>
              <span className="text-3xl">
                {score}/{quiz.length}
              </span>
            </div>

            <Button size="lg" onClick={checkAnswer} disabled={typeof status === "boolean"}>
              Next Question
            </Button>
          </div>
        </>
      )}

      {width !== Infinity && height !== Infinity && (
        <Confetti width={width} height={height} numberOfPieces={isParty ? 1000 : 0} />
      )}
    </div>
  );
}
