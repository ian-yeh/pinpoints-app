import express from "express";
import { getLatestNews, getRightsNews } from "../controllers/newsController";

const newsRouter = express.Router();

newsRouter.get("/", getLatestNews);
newsRouter.get("/rights", getRightsNews);

export default newsRouter;
