import { Request, Response } from "express";

import { UserInfo, Article, NewsResponse, Bias, EvalArticle, Issue, GeneratedIssue, IssueArticle } from "./datatype";

const host : string = "http://localhost:8080/api"

export async function createNewIssue(req: Request, res: Response) {
    const { age, race, country, topic, schoolStatus } = req.body;
    let userInfo : UserInfo = {
        age: age, 
        race: race,
        country: country,
        topic: topic,
        schoolStatus: schoolStatus
    }
    const urlAPI : string = `${host}/news/queried?country=${userInfo.country}&keyword=${topic}&from=${"2025-09-10"}`
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
        return res.status(500).json({ message: "Error grabbing info from article" }) 
        // cannot continue without articles
    }
    let biasArticles : EvalArticle[] = new Array;
    let issueArticles: IssueArticle[] = new Array;
    for(let i=0; i<articles.length; i++){
        let curArt : Article = articles[i]
        try{
            const biasAPI : string = `${host}/gemini/article?url=${curArt.url}`
            const response = await fetch(biasAPI);
            if(!response.ok){
                throw new Error(`Issue Reading Articles: ${response.status}`)
            }
            let data = await response.json()
            let biasData : number = data.bias;

            if(biasData !== null){
                let art : EvalArticle = {
                    url: curArt.url,
                    title: curArt.title,
                    publication: curArt.publishedAt,
                    bias: biasData,
                    image: curArt.urlToImage
                }                
                let issueArticle: IssueArticle = {
                    url: curArt.url,
                    title: curArt.title,
                    publication: curArt.publishedAt,
                    bias: biasData,
                }
                biasArticles.push(art);
                issueArticles.push(issueArticle);
            }

            else {
                console.log(`Article: ${i} had a generation error`);
                throw new Error(`Article: ${i} had a generation error`);
            }
        }
        catch(Error){
            console.log(Error);
            continue;
        }
    }

    if (!biasArticles.length) {
        return res.status(500).json({ message: "No valid bias articles found" });
    }

    // find closest neutral score 0.5 = neutrals
    let maxi : number = 0;
    for(let i=0; i<biasArticles.length; i++){
        if(Math.abs((biasArticles[i].bias) - 0.5) < Math.abs((biasArticles[maxi].bias) - 0.5)){
            maxi = i;
        }
    }

    let userInfoString :string[] = Object.values(userInfo);
    let userString : string = ""
    for(let i=0; i<userInfoString.length; i++){
        userString+=`${userInfoString[i]},`;
    }

    const bestArticle : EvalArticle = biasArticles[maxi];
    console.log(bestArticle.url)
    let artContent : string;

    try{
        const response = await fetch(`${host}/gemini/readsite?url=${bestArticle.url}`);
        if(!response.ok){
            throw new Error(`Issue Searching Articles: ${response.status}`);
        }
        const data : string = await response.json();
        artContent = data
    }
    catch(Error){
        console.log(Error);
        return res.status(500).json({ message: "Error grabbing info from article" }) 
    }    

    const issueGeneration : string = `${host}/gemini/issue`;
    const bodydata = {
        content: artContent,
        user: userString,
        pub: bestArticle.publication
    }

    try {
        const response = await fetch(issueGeneration, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(bodydata)
        });
        if(!response.ok){
            throw new Error(`Issue Generating Issue: ${response.status}`);
        }
        const data = await response.json();
        const generatedData : GeneratedIssue = data.data 
        let Issue: Issue = {
            title: generatedData.title,
            summary: generatedData.summary,
            whatToDo: generatedData.whatToDo,
            significance: generatedData.significance,
            coordinates: generatedData.coordinates,
            city: generatedData.city,
            image: bestArticle.image,
            articles: issueArticles
        }
        res.json({Issue});
    }
    catch(Error){
        console.log(Error);
        res.status(500).json({ message: "Error generating issue" }) 
    }
}
