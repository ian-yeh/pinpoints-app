import express from "express";
import { getLatestNews, getQueriedNews } from "../controllers/newsController";

const newsRouter = express.Router();

newsRouter.get("/", getLatestNews);
newsRouter.get("/queried", getQueriedNews);

export default newsRouter;
