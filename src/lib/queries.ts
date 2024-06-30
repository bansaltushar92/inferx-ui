//Working queries from queries.json
export const Queries = [
  {
    id: 1,
    query: "Can you write a love letter to my pizza? It's true love!",
  },
  {
    id: 2,
    query: "If animals could talk, which one would be the rudest?",
  },
  {
    id: 3,
    query: "Can you come up with a conspiracy theory about why socks disappear in the laundry?",
  },
  {
    id: 4,
    query: "What would chairs look like if our knees bent the other way?",
  },
  {
    id: 5,
    query: "Can you write a rap about why Mondays are the worst?",
  },
  {
    id: 6,
    query: "Can you help me name my pet rock?",
  },
  {
    id: 7,
    query: "Can you write a story about a superhero whose only power is making perfect toast?",
  },
];

/**
 * Returns an array of randomly selected queries from the given array of queries.
 * @param queries - The array of queries to select from.
 * @param count - The number of queries to select.
 * @returns An array of randomly selected queries.
 */
export function getRandomQueries(
  queries: { id: number; query: string }[],
  count: number,
) {
  const randomQueries: number[] = [];
  const totalQueries = queries.length;

  while (randomQueries.length < count) {
    const randomIndex = Math.floor(Math.random() * totalQueries);
    if (!randomQueries.includes(randomIndex)) {
      randomQueries.push(randomIndex);
    }
  }
  return randomQueries.map((index) => queries[index]);
}
