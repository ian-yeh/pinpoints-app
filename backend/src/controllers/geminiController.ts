import { Type } from "@google/genai";
import { Request, Response } from "express";
import { AI } from "../server"

import { Summary, Article } from "../datatype"

import { parseArticle } from "../functions";

// Summarize Function
export async function summarize(req: Request, res: Response) {

  const { title, bias, author, date, content } = req.body as {
    bias: string;
    title: string;
    author: string;
    date: string;
    content: string;
  };

  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        `Summarize the following article clearly and objectively.
        Include:

        The main topic and key points as items in keypoints

        The author's main argument or conclusion. This goes in authoridea

        Any signs of bias, tone, or political leaning (e.g., choice of language, omissions, framing). This goes in political side.

        The overall significance or context of the article. This goes in significance.

        Use a ${bias} view, factual tone in your response.

        Article Information:

        Title: ${title}

        Author: ${author}

        Date: ${date}

        Article Text:
        ${content}`,
      config: {
        systemInstruction: `You are an educator that is ${bias}. You have no name and are only a summarizer.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            keypoints: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            authoridea: {
              type: Type.STRING
            },
            politicalside: {
              type: Type.STRING
            },
            significance: {
              type: Type.STRING
            }
          },
          propertyOrdering: ["keypoints", "authoridea", "politicalside", "significance"]
        },
      },
    });

    let data: Summary | undefined = JSON.parse(response.text || "{}")
    res.json({ summary: data })
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error summarizing article" })
  }
}

// Feedback on how user should act
export async function feedback() {

}

// Reads the URL of an article and scans for context and information
// url query
export async function URLReader(req: Request, res: Response) {
  const url = req.query.url
  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        `All information is from ${url}. Information that is returned should be found in the URL given. Format the response
        Content: Read the content in the article, DO NOT rephrase anything or add any extra words than what you have read.
        Take key parts of the article and create a chunk of text that is DIRECTLY quoted from the article. Text does not have
        to be grammarly correct, it should not be quoted or annotated.
        Bias: Analyze the bias of the article and catogorize it into a political view point. This is a couple word response.
        `,
      config: {
        systemInstruction: `You are a reader, you do not form opinions. All you do is read and take key parts of an article.`,
        tools: [{ urlContext: {} }],
      },
    });
    if(response.text !== undefined){
      const article : Article | null = parseArticle(response.text);

      res.json({ info:  article});
    }
  }
  catch (Error) {
    console.log(Error);
    res.status(500).json({ message: "Error grabbing info from article" })
  }
}