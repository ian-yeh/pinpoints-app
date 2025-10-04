export type Issue = {
  title: string;
  summary: string;
  whatToDo: string[];
  significance: "High" | "Low" | "Medium";
  coordinates: [number, number];
  topic: string;
  articles: Article[]
}

export type Article = {
  bias: number;
  url: string;
  title: string;
  publication: string;
}
