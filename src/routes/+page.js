import { csvParse, autoType, csv } from "d3";

export async function load({ fetch }) {
  const response = await fetch("/fastfood.csv");
  const rawData = await response.text();
  const data = csvParse(rawData).map((d) => {
    const parsed = autoType(d);
    return {
      ...parsed,
    };
  });

  return { data };
}
