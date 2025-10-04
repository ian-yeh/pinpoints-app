import { Article } from "@/lib/types/article";
import { ExternalLink } from "lucide-react";


const ArticleCard = ({ bias, url, title, publication }: Article) => {
  // Determine bias label and color
  const getBiasInfo = (biasValue: number) => {
    if (biasValue < 0.33) return { label: "Left", color: "bg-blue-500" };
    if (biasValue < 0.67) return { label: "Center", color: "bg-purple-500" };
    return { label: "Right", color: "bg-red-500" };
  };

  const biasInfo = getBiasInfo(bias);
  const biasPercentage = bias * 100;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-bg rounded-lg p-4 hover:bg-bg-light transition-colors border border-gray-700/50 group shadow-md"
    >
      <div className="space-y-3">
        {/* Title and External Link Icon */}
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors line-clamp-2">
            {title}
          </h4>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-300 flex-shrink-0 mt-0.5" />
        </div>

        {/* Publication */}
        <p className="text-xs text-gray-400">{publication}</p>

        {/* Bias Slider */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500">Political Bias</span>
            <span className={`font-medium ${
              bias < 0.33 ? "text-blue-400" : 
              bias < 0.67 ? "text-purple-400" : 
              "text-red-400"
            }`}>
              {biasInfo.label}
            </span>
          </div>
          
          {/* Slider Track */}
          <div className="relative h-1.5 bg-gray-700 rounded-full overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 opacity-40" />
            
            {/* Bias Indicator */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `calc(${biasPercentage}% - 2px)` }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>Left</span>
            <span>Center</span>
            <span>Right</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
