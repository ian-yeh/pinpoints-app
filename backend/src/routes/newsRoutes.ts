import express from "express";
import * as news from "../controllers/newsController";

const newsRouter = express.Router();

newsRouter.get("/", news.getLatestNews);

export default newsRouter;
