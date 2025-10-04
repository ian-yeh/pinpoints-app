import { GoogleGenAI } from "@google/genai";

const gemini_key = process.env.GEMINI_API_KEY

const AI = new GoogleGenAI({ apiKey: gemini_key });

// Summarize Function
export async function summarize() {
  const response = await AI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    }
  });
  console.log(response.text);
}

// Feedback on how user should act
export async function feedback(){
  
}