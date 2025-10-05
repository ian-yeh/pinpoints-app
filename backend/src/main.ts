import { Request, Response } from "express";

import { UserInfo, Article, NewsResponse, Bias, EvalArticle, Issue, GeneratedIssue } from "./datatype";

const host : string = "http://localhost:3000/api"

export async function createNewIssue(req: Request, res: Response) {
    const { age, race, country, topic, schoolStatus } = req.body;
    let userInfo : UserInfo = {
        age: age, 
        race: race,
        country: country,
        topic: topic,
        schoolStatus: schoolStatus
    }
    const urlAPI : string = `${host}/news/queried?country=${userInfo.country}&`
    let articles : Article[];
    // takes topic & country
    try{
        const response = await fetch(urlAPI);
        if(!response.ok){
            throw new Error(`Issue Searching Articles: ${response.status}`);
        }
        const data : NewsResponse = await response.json();
        articles  = Object.values(data.articles);
    }
    catch(Error){
        console.log(Error);
        res.status(500).json({ message: "Error grabbing info from article" }) 
        return // cannot continue without articles
    }
    let biasArticles : EvalArticle[] = new Array(0);
    for(let i=0; i<articles.length; i++){
        let curArt : Article = articles[i]
        const biasAPI : string = `${host}/gemini/article?q=${curArt.url}`
        const response = await fetch(biasAPI);
        if(!response.ok){
            throw new Error(`Issue Reading Articles: ${response.status}`)
        }
        const biasData : Bias = await response.json();
        
        let art : EvalArticle = {
            url: curArt.url,
            title: curArt.title,
            publication: curArt.publishedAt,
            topic: userInfo.topic,
            bias: biasData
        }

        biasArticles.push(art);

    }

    // find closest neutral score 0.5 = neutrals
    let maxi : number = 0;
    for(let i=0; i<articles.length; i++){
        if(Math.abs(biasArticles[i].bias.bias - 0.5) < Math.abs(biasArticles[maxi].bias.bias - 0.5)){
            maxi = i;
        }
    }

    let userInfoString :string[] = Object.values(userInfo);
    let userString : string = ""
    for(let i=0; i<userInfoString.length; i++){
        userString+=userInfoString[i];
    }

    const bestArticle : EvalArticle = biasArticles[maxi];
    const articleContext : string = `${host}/gemini/article?content=${bestArticle.bias.content}&user=${userString}&pub=${bestArticle.publication}`

    try {
        const response = await fetch(articleContext);
        if(!response.ok){
            throw new Error(`Issue Generating Issue: ${response.status}`);
        }
        const data : GeneratedIssue = await response.json();
        let Issue : Issue = {
            Title: data.Title,
            Summary: data.Summary,
            Suggestion: data.Suggestion,
            Significance: data.Siginificance,
            coords: data.coords,
            Articles: biasArticles
        }
        res.json({Issue});
    }
    catch(Error){
        console.log(Error);
        res.status(500).json({ message: "Error generating issue" }) 
    }
}