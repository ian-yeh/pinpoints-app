import { Bias } from "./datatype";

export function parseArticle(info: string): Bias {
  const backupBias: Bias = {
      content: "No content",
      biasValue: 0.5,
      justification: "Gemini bugged out"
    }
  try {
    const contentMatch = info.match(/Content:\s*([\s\S]*?)\s*Bias:/);
    const biasMatch = info.match(/Bias:\s*([\d.]+)/);
    const justificationMatch = info.match(/Justification:\s*([\s\S]*)$/);

    if (contentMatch && biasMatch && justificationMatch) {
      const generatedBias: Bias = {
        content: contentMatch[1].trim(),
        biasValue: Number(biasMatch[1].trim()),
        justification: justificationMatch[1].trim(),
      };
      return generatedBias;
    }

    return backupBias;

  } catch (err) {
    console.error("Failed to parse Article:", err);
    return backupBias;
  }
}
