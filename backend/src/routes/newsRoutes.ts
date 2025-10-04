import express from "express";
import { getLatestNews } from "../controllers/newsController";

const newsRouter = express.Router();

newsRouter.get("/", getLatestNews);

export default newsRouter;
