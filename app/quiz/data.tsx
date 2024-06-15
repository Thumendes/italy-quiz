export interface QuizItem {
  question: string;
  options: string[];
  answer: number;
}

export const quiz = [
  {
    question: "What is the capital of Italy?",
    options: ["Milan", "Rome", "Venice", "Florence"],
    answer: 1,
  },
  {
    question: "Which of these dishes is traditionally Italian?",
    options: ["Sushi", "Taco", "Pizza", "Poutine"],
    answer: 2,
  },
  {
    question: "Who painted the Sistine Chapel?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
    answer: 1,
  },
  {
    question: "What is the official language of Italy?",
    options: ["Spanish", "French", "Italian", "German"],
    answer: 2,
  },
  {
    question: "Which of these Italian cities is famous for its canals?",
    options: ["Rome", "Milan", "Venice", "Naples"],
    answer: 2,
  },
  {
    question: "What is the official currency of Italy?",
    options: ["Lira", "Euro", "Dollar", "Franc"],
    answer: 1,
  },
  {
    question: "What is the largest active volcano in Europe, located in Sicily?",
    options: ["Vesuvius", "Etna", "Stromboli", "Krakatoa"],
    answer: 1,
  },
  {
    question: "Who wrote the work 'The Divine Comedy'?",
    options: ["Petrarch", "Boccaccio", "Dante Alighieri", "Machiavelli"],
    answer: 2,
  },
  {
    question: "What is the name of the famous film festival held annually in Italy?",
    options: ["Cannes Film Festival", "Venice Film Festival", "Berlin Film Festival", "Sundance Film Festival"],
    answer: 1,
  },
  {
    question: "What is the main sport in Italy?",
    options: ["Basketball", "Tennis", "Football", "Rugby"],
    answer: 2,
  },
] satisfies QuizItem[];
