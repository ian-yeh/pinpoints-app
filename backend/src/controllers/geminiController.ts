import { Type, GoogleGenAI } from "@google/genai";
import { Request, Response } from "express";

console.log(process.env.GEMINI_API_KEY)

const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Summarize Function
export async function summarize(req : Request, res : Response) {

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
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              politicalside: {
                type: Type.STRING,
              },
              authoridea: {
                type: Type.STRING,
              },
              keypoints: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
              },
              significance: {
                type: Type.STRING,
              },
            },
            propertyOrdering: ["keypoints", "politicalside"],
          },
        },
      },
    });

    let data : string | undefined = response.text;
    res.json({summary: data})
  }
  catch(error) {
    console.error(error)
    res.status(500).json({message: "Error in Summarizing Article"})
  }
}

// Feedback on how user should act
export async function feedback(){
  
}