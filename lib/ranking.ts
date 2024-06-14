import { kv } from "@vercel/kv";

interface RankingUser {
  id: string;
  name: string;
  score: number;
}

export class Ranking {
  static rankingKey = "ranking" as const;

  private constructor(private ranking: RankingUser[]) {}

  static async create() {
    const ranking = await kv.get<RankingUser[]>(Ranking.rankingKey);

    return new Ranking(ranking ?? []);
  }

  async add({ name, score }: Omit<RankingUser, "id">) {
    const rankingUser = {
      id: this.createId(),
      name,
      score,
    } satisfies RankingUser;

    this.ranking.push(rankingUser);

    await this.save();

    return rankingUser;
  }

  async saveScore(id: string, score: number) {
    const user = this.ranking.find((user) => user.id === id);

    if (user) {
      user.score = score;
    }

    await this.save();
  }

  async remove(id: string) {
    this.ranking = this.ranking.filter((user) => user.id !== id);
    await this.save();
  }

  async reset() {
    this.ranking = [];
    await this.save();
  }

  async save() {
    await kv.set(Ranking.rankingKey, this.ranking);
  }
  getOrdered() {
    return this.ranking.sort((a, b) => b.score - a.score);
  }

  private createId() {
    return Math.random().toString(36).substring(2);
  }
}
