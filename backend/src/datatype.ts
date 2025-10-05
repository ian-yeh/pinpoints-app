class Pair{
    public first: any;
    public second: any;
    constructor(first: any, second: any){
        this.first = first;
        this.second = second;
    }
}

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Article = {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type UserInfo = {
  age: string;
  race: string;
  country: string;
  topic: string;
  schoolStatus: string;
};

export type Bias = {
    content: string;
    biasValue : number;
    justification: string;
}

export type EvalArticle = {
    url: string;
    title: string;
    publication: string;
    bias: number;
    image: string;
}

export type IssueArticle = {
  url: string;
  title: string;
  publication: string;
  bias: number;
}

export type GeneratedIssue = {
    title: string;
    summary: string;
    whatToDo: string;
    significance: string;
    coordinates: [number, number];
    city: string;
}

export type Issue = {
    title: string;
    summary: string;
    whatToDo: string;
    significance: string;
    coordinates: [number, number];
    city: string;
    image: string;
    articles: IssueArticle[];
}
