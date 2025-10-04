/*import { response } from "express";

import { UserInfo } from "./datatype";

const host : string = "http://localhost:3000/api"

export async function createNewIssue(info : UserInfo) {
    const urlAPI : string = `${host}/news/queried?country=${info.country}&`
    let articles;
    // takes topic & country
    try{
        const response = await fetch(urlAPI);
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        articles = response.json()
    } catch (err) {
        console.error("Fetch error:", err);
    }
    articles = Object.values(articles)

    // find closest neutral score 0.5 = neutrals
    let maxi : number = 0;
    for(let i=0; i<articles.length(); i++){
        if(Math.abs(articles[i] - 0.5) < Math.abs(articles[maxi] - 0.5)){
            maxi = i;
        }
    }

    const articleContext : string = `${host}/gemini/article?q=${articles[maxi].url}`

    try{
        const response = await fetch(articleContext);
        if(!response.ok){
            throw new Error(`${response.status}`)
        }

    }

}*/