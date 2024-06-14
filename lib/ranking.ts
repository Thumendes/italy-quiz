interface RankingUser {
  id: string;
  name: string;
  score: number;
}

class Ranking {
  private ranking: RankingUser[] = [
    {
      id: "1",
      name: "John Doe",
      score: 10,
    },
    {
      id: "2",
      name: "Jane Doe",
      score: 20,
    },
  ];

  add({ name, score }: Omit<RankingUser, "id">) {
    const rankingUser = {
      id: this.createId(),
      name,
      score,
    } satisfies RankingUser;

    this.ranking.push(rankingUser);

    return rankingUser;
  }

  saveScore(id: string, score: number) {
    const user = this.ranking.find((user) => user.id === id);

    if (user) {
      user.score = score;
    }
  }

  remove(id: string) {
    this.ranking = this.ranking.filter((user) => user.id !== id);
  }

  getOrdered() {
    return this.ranking.sort((a, b) => b.score - a.score);
  }

  reset() {
    this.ranking = [];
  }

  private createId() {
    return Math.random().toString(36).substring(2);
  }
}

export const ranking = new Ranking();
