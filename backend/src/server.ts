import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import newsRouter from "./routes/newsRoutes";
import geminiRouter from "./routes/geminiRoutes";
import { createNewIssue } from "./main";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/createissue", createNewIssue);

app.use("/api/news", newsRouter);
app.use("/api/gemini", geminiRouter);

export const AI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
