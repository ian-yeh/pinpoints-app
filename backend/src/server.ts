import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import newsRouter from "./routes/newsRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/news", newsRouter);

console.log(process.env.NEWS_API_KEY);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
