import { Type } from "@google/genai";
import { Request, Response } from "express";
import { AI } from "../server"

import { Bias } from "../datatype"

import { parseArticle } from "../functions";

// creates the issue
export async function createIssue(req: Request, res: Response) {

  const content: string = req.body.content;
  const user: string = req.body.user;
  const publication: string = req.body.pub;

  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [content],
      config: {
        systemInstruction: `Your name is Poly. You are an educator that is unbiased. 
        You are teaching the user about the content.
        You must fill out the response schema based on the instructions in the description`,
        thinkingConfig: {
          thinkingBudget: 0
        },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: `Create an unbiased title representing the content. This title will be used for the issue.`
            },
            summary: {
              type: Type.ARRAY,
              description: `Summarize the content so that it is readable. Do not change the content itself. You are allowed to paraphrase.
              Each string gets one point. This is a concise summary, focusing on the main point.`,
              items: {
                type: Type.STRING
              }
            },
            significance: {
              type: Type.STRING,
              description: `Describe why this event is significant to the user based on the user's situation ${user}.
              Be concise. Explain how it might affect them.`
            },
            whatToDo: {
              type: Type.STRING,
              description: `Describe what the user should do ${user}. If it does not affect the user tell them ONLY
              "It does not affect you." Do not give insight on what you think.`
            },
            coordinates: {
              type: Type.ARRAY,
              description: `Based on the content and ${publication} estimate the location at which this article applies to.
              Longitude is represented by y, Latitude is represented by x, return an array of [x, y], where x and y are numbers, and nothing else.`,
              items: {
                type: Type.NUMBER
              }
            },
            city: {
              type: Type.STRING,
              description: `Based on the chosen x and y coordinates, determine what city it is located in.
              I only want the name of the city and nothing else.`
            }
          }
        },
      },
    });

    let data = JSON.parse(response.text || "{}")
    res.json({ data })
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error summarizing issue" })
  }
}

// webscrap the given url
export async function grabcontent(res: Response, req: Request) {
  const url = req.query.url
  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        `All information is from ${url}. Information that is returned should be found in the URL given. Format the response in concise sentences
        Read the content in the article, DO NOT rephrase anything or add any extra words than what you have read.
        Take key parts of the article and create a chunk of text that is DIRECTLY quoted from the article. Text does not have
        to be grammarly correct, it should not be quoted or annotated. Limit the amount of text to max 4 sentences.
        DO NOT GO OVER 4 sentences.`,
      config: {
        systemInstruction: `You are a reader, you do not form opinions. All you do is read and take key parts of an article.
        Make sure you follow sentence lengths. Only output Content. DO NOT OUT PUT INSTRUCTIONS`,
        tools: [{ urlContext: {} }],
      },
    });
    if (response.text !== undefined) {
      const content: string = response.text;
      res.json({content});
    }
    else {
      throw new Error("Cannot access site")
    }
  }
  catch (Error) {
    console.log(Error);
    res.status(500).json({ message: "Error grabbing info from article" })
  }
}

// Get all the keywords about a user's interests
export async function keywords() {
}

// Reads the URL of an article and scans for context and information
// url query
export async function URLReader(req: Request, res: Response) {
  const url = req.query.url
  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents:
        `All information is from ${url}. Information that is returned should be found in the URL given. Analyze the 
        bias of the article and catogorize it into a political view point. Progressive at 0 Conservative at 1. THE OUTPUT SHOULD ONLY BE 1 NUMBER
        This should ONLY be a number response, you have 2 significant figures. It does not have to be a good looking number.
        `,
      config: {
        systemInstruction: `You are a reader, you do not form opinions.
        Only output BIAS as 1 NUMBER. DO NOT OUTPUT ANYTHING ELSE. ONLY 1 NUMBER`,
        tools: [{ urlContext: {} }],
        thinkingConfig: {
          thinkingBudget: 0
        },
      },
    });
    if (response.text !== undefined) {
      const bias: string = response.text;

      res.json({ bias });
    }
    else {
      throw new Error("Cannot access site")
    }
  }
  catch (Error) {
    console.log(Error);
    res.status(500).json({ message: "Error grabbing info from article" })
  }
}
