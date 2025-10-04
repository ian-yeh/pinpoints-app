import { Article } from "./datatype";

export function parseArticle(info: string): Article | null {
  try {

    const contentMatch = info.match(/Content:\s*(.*?)\s*Bias:/s);
    const biasMatch = info.match(/Bias:\s*(.*)$/s);

    if (!contentMatch || !biasMatch) {
      return null;
    }

    const article: Article = {
      content: contentMatch[1].trim(),
      bias: biasMatch[1].trim(),
    };

    return article;
  } catch (err) {
    console.error("Failed to parse Article:", err);
    return null;
  }
}