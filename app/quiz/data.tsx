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

export const quizHard = [
  {
    question: "What is the name of the famous Renaissance statue by Michelangelo housed in Florence?",
    options: ["The Thinker", "The David", "The Kiss", "The Birth of Venus"],
    answer: 1,
  },
  {
    question: "Which Italian city is known as the 'Cradle of the Renaissance'?",
    options: ["Rome", "Milan", "Florence", "Venice"],
    answer: 2,
  },
  {
    question: "Who is the Italian composer famous for his operas 'La Traviata' and 'Aida'?",
    options: ["Gioachino Rossini", "Giacomo Puccini", "Giuseppe Verdi", "Antonio Vivaldi"],
    answer: 2,
  },
  {
    question: "Which Italian island is known for its association with the mythological figure Odysseus?",
    options: ["Sardinia", "Capri", "Elba", "Sicily"],
    answer: 1,
  },
  {
    question: "What is the traditional Italian rice dish cooked with broth, saffron, and other ingredients?",
    options: ["Risotto", "Polenta", "Gnocchi", "Lasagna"],
    answer: 0,
  },
  {
    question: "Which Italian scientist and mathematician is often referred to as the 'father of modern physics'?",
    options: ["Enrico Fermi", "Galileo Galilei", "Alessandro Volta", "Leonardo Fibonacci"],
    answer: 1,
  },
  {
    question: "Which historic event does the Italian city of Siena host annually, involving horse racing?",
    options: ["Regata Storica", "Carnevale di Venezia", "Palio di Siena", "Festa della Sensa"],
    answer: 2,
  },
  {
    question: "What is the name of the luxurious Italian sports car manufacturer headquartered in Maranello?",
    options: ["Lamborghini", "Maserati", "Ferrari", "Alfa Romeo"],
    answer: 2,
  },
  {
    question: "Which ancient Roman structure, known for gladiatorial contests, is located in the center of Rome?",
    options: ["The Pantheon", "The Roman Forum", "The Colosseum", "The Circus Maximus"],
    answer: 2,
  },
  {
    question: "Which Italian explorer is credited with opening the Americas to European colonization?",
    options: ["Marco Polo", "Christopher Columbus", "Amerigo Vespucci", "Giovanni da Verrazzano"],
    answer: 1,
  },
] satisfies QuizItem[];
