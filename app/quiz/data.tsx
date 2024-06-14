export interface QuizItem {
  question: string;
  options: string[];
  answer: number;
}

export const quiz = [
  {
    question: "Qual é a capital da Itália?",
    options: ["Milão", "Roma", "Veneza", "Florença"],
    answer: 1,
  },
  {
    question: "Qual destes pratos é tradicionalmente italiano?",
    options: ["Sushi", "Taco", "Pizza", "Poutine"],
    answer: 2,
  },
  {
    question: "Quem pintou a Capela Sistina?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
    answer: 1,
  },
  {
    question: "Qual é o idioma oficial da Itália?",
    options: ["Espanhol", "Francês", "Italiano", "Alemão"],
    answer: 2,
  },
  {
    question: "Qual destas cidades italianas é famosa por seus canais?",
    options: ["Roma", "Milão", "Veneza", "Nápoles"],
    answer: 2,
  },
  {
    question: "Qual é a moeda oficial da Itália?",
    options: ["Lira", "Euro", "Dólar", "Franco"],
    answer: 1,
  },
  {
    question: "Qual é o maior vulcão ativo da Europa, localizado na Sicília?",
    options: ["Vesúvio", "Etna", "Stromboli", "Krakatoa"],
    answer: 1,
  },
  {
    question: "Quem escreveu a obra 'A Divina Comédia'?",
    options: ["Petrarca", "Boccaccio", "Dante Alighieri", "Machiavelli"],
    answer: 2,
  },
  {
    question: "Qual é o nome do famoso festival de cinema que acontece anualmente na Itália?",
    options: ["Festival de Cannes", "Festival de Veneza", "Festival de Berlim", "Festival de Sundance"],
    answer: 1,
  },
  {
    question: "Qual é o principal esporte na Itália?",
    options: ["Basquete", "Tênis", "Futebol", "Rugby"],
    answer: 2,
  },
] satisfies QuizItem[];
