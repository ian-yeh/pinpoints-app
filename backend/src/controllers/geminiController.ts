import { Type } from "@google/genai";
import { Request, Response } from "express";
import { AI } from "../server";

export async function createIssue(req: Request, res: Response) {
  const { content, user, issueTitle } = req.body;

  try {
    const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [`Issue: ${issueTitle}\n\nContent: ${content}`],
      config: {
        systemInstruction: `Your name is Poly. You are an educator that provides unbiased, personalized guidance about how news and events affect specific users.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            whatToDo: {
              type: Type.ARRAY,
              description: `Based on the user's situation (${user}), provide 2-4 actionable, specific steps or insights about how this issue affects them. 
              Consider their location, demographics, and relevant circumstances.
              If the content doesn't meaningfully affect the user, return ["This does not directly affect you."]
              Be concise and practical.`,
              items: {
                type: Type.STRING
              }
            }
          }
        }
      }
    });

    const data = JSON.parse(response.text || "{}");
    res.json({ whatToDo: data.whatToDo || [] });

  } catch (error) {
    console.error("Error generating guidance:", error);
    res.status(500).json({ message: "Error generating guidance" });
  }
}
