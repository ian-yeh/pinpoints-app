import { ArticleBias } from "./datatype";

export function parseArticle(info: string): ArticleBias | null {
  try {
    // Use non-greedy match to capture each section properly
    const contentMatch = info.match(/Content:\s*(.*?)\s*Bias:/s);
    const biasMatch = info.match(/Bias:\s*(.*?)\s*Justification:/s);
    const justificationMatch = info.match(/Justification:\s*([\s\S]*)$/s);

    if (!contentMatch || !biasMatch || !justificationMatch) {
      console.warn("Could not find all required sections in info string.");
      return null;
    }

    const article: ArticleBias = {
      content: contentMatch[1].trim(),
      bias: biasMatch[1].trim(),
      justification: justificationMatch[1].trim(),
    };

    return article;
  } catch (err) {
    console.error("Failed to parse Article:", err);
    return null;
  }
}