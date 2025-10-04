class Pair{
    public first: any;
    public second: any;
    constructor(first: any, second: any){
        this.first = first;
        this.second = second;
    }
}

export interface ArticleBias {
    content: string;
    bias:string;
    justification: string;
}

export interface Article{
    url: string;
    title: string;
    publication: string;
    topic: string;
    bias: ArticleBias;
}

export interface Issue {
    Title: string;
    Summary: string;
    Suggestion: string;
    Significance: string;
    coords: Pair;
    Articles: Article[];
}
