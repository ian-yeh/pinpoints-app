import { Type } from "@google/genai";
import { Request, Response } from "express";
import { AI } from "../server"

import { Bias, Issue, UserInfo } from "../datatype"

import { parseArticle } from "../functions";

// creates the issue
export async function createIssue(req: Request, res: Response) {

  const content : Issue = req.body.content;
  const user : UserInfo = req.body.user;

  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [JSON.stringify(content)],
      config: {
        systemInstruction: `Your name is Poly. You are an educator that is unbiased. 
        You are teaching the user about the content. You are advising them about it.
        You must fill out the response schema based on the instructions in the description`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            whatToDo: {
              type: Type.STRING,
              description: `Describe what the user should do ${user}. If it does not affect the user tell them
              "It does not affect you." Do give insight on what you think.`
            },
          }
        },
      },
    });
    if(response !== undefined){
      let data = response.text;
      res.json({data})
    }
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error summarizing issue" })
  }
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
        to be grammarly correct, it should not be quoted or annotated. Limit the amount of text to max 4 sentences.
        DO NOT GO OVER 4 sentences.
        Bias: Analyze the bias of the article and catogorize it into a political view point. Progressive at 0 Conservative at 1.
        This should only be a number response, you have 2 significant figures. It does not have to be a good looking number.
        Justification: Maximum 1 sentence on why you chose the bias number. You are allowed to interpret information here.
        DO NOT GO OVER 1 sentence.
        `,
      config: {
        systemInstruction: `You are a reader, you do not form opinions. All you do is read and take key parts of an article.
        Make sure you follow sentence lengths. Only output Content, Bias & Justification. DO NOT OUT PUT INSTRUCTIONS`,
        tools: [{ urlContext: {} }],
      },
    });
    if(response.text !== undefined){
      const bias : Bias = parseArticle(response.text);

      res.json({bias});
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
