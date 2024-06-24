//Working queries from queries.json
export const Queries = [
  {
    id: 1,
    query: "How many times apple beat earning estimates in the year 2023?",
  },
  {
    id: 2,
    query: "List of stocks with upcoming earnings",
  },
  {
    id: 3,
    query: "Which SP500 stocks are announcing earnings in next 5 days?",
  },
  {
    id: 4,
    query: "Find similar companies to Rivian?",
  },
  {
    id: 5,
    query: "Average price of AAPL in the month of July in year 2023?",
  },
  {
    id: 6,
    query: "Give the latest news about Nvidia?",
  },
  {
    id: 7,
    query: "List gainer stocks in US market",
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
