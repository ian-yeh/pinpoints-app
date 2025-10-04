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
  let my_map = {
    Canada: ["ctvnews.ca", "cbc.ca", "rebelnews.com"],
    USA: ["foxnews.com"],
    UK: ["The Guardian"],
  };
  try {
    let { keywords, from } = req.query;
    console.log(keywords);
    let url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      keywords as string
    )}&from=${from}&domains=cbc.ca/news,rebelnew.com,foxnews.com,theguardian.com,ctvnews.ca,bbc.co.uk&apiKey=${
      process.env.NEWS_API_KEY
    }`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getQueriedNews" });
  }
}
