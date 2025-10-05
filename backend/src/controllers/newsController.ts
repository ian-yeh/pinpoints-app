import { Request, Response } from "express";


export async function getLatestNews(req: Request, res: Response) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getLatestNews" });
  }
}


export async function getQueriedNews(req: Request, res: Response) {
  try {
    let { keyword, from, country } = req.query;

    const value = encodeURIComponent(keyword as string) + '+' + encodeURIComponent(country as string)
    let url = `https://newsapi.org/v2/everything?q=${value}&from=${from}&domains=cbc.ca/news,foxnews.com,aljazeera.com,apnews.com,cbsnews.com,news.google.comß&apiKey=${process.env.NEWS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getQueriedNews" });
  }
}
