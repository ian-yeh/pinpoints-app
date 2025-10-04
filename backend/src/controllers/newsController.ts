import { Request, Response } from "express";

export async function getLatestNews(req: Request, res: Response) {
  try {
    const response = await fetch(
      "https://api.currentsapi.services/v1/latest-news?" +
        `apiKey=${process.env.CURRENTS_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getLatestNews" });
  }
}
