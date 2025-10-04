import { Type } from "@google/genai";
import { Request, Response } from "express";
import { AI } from "../server"

import { Issue, ArticleBias } from "../datatype"

import { parseArticle } from "../functions";

// creates the issue
export async function createIssue(req: Request, res: Response) {

  const content : string = req.body.content;

  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: content,
      config: {
        systemInstruction: `Your name is Poly. You are an educator that is unbiased. 
        You are teaching the user about the content.
        You must fill out the response schema based on the instructions in the description`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            Title: {
              type: Type.STRING,
              description: `Create an unbiased title representing the content. This title will be used for the issue.`
            }
          }
        },
      },
    });

    let data = JSON.parse(response.text || "{}")
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

// Get all the keywords about a user's interests
export async function keywords(){
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
        Bias: Analyze the bias of the article and catogorize it into a political view point. Progressive at 0 Conservative at 1.
        This should only be a number response, you have 2 significant figures. It does not have to be a good looking number.
        Justification: Maximum 2 sentences on why you chose the bias number. You are allowed to interpret information here.
        `,
      config: {
        systemInstruction: `You are a reader, you do not form opinions. All you do is read and take key parts of an article.`,
        tools: [{ urlContext: {} }],
      },
    });
    console.log(response.text)
    if(response.text !== undefined){
      const article : ArticleBias | null = parseArticle(response.text);

      res.json({ info:  article});
    }
    else{
      throw new Error("Cannot access site")
    }
  }
  catch (Error) {
    console.log(Error);
    res.status(500).json({ message: "Error grabbing info from article" })
  }
}