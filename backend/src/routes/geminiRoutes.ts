import express from "express";
import *  as gemini from "../controllers/geminiController";

const geminiRouter = express.Router();

geminiRouter.post("/summarize", gemini.summarize);

geminiRouter.get("/article", gemini.URLReader);

export default geminiRouter;