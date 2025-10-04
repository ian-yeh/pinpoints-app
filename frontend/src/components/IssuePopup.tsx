import { motion } from "framer-motion";
import { RevealAnimation } from "./RevealAnimation";
import Image from "next/image";
import { Issue } from "@/lib/types/article";
import ArticleCard from "@/components/ArticleCard";

const IssuePopup = ({ title, summary, city, image, articles }: Issue ) => {
  return (
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: 'auto '}}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="bg-bg-dark rounded-3xl h-[80vh] shadow-lg border-bg-light border-[0.25px]"
    >
      <div className="py-12 px-14 h-full overflow-y-auto">
        <div className="grid grid-cols-[1.5fr_1fr] gap-8">
          <div className="space-y-10 pr-4">
            <div className="space-y-6">
              <RevealAnimation delay={0.9}>
                <h3 className="text-4xl font-semibold tracking-wider leading-tight">{title}</h3>
                <p className="px-3 py-2 bg-bg font-mono mt-4 w-fit shadow-md rounded-xl text-sm">📌 {city}</p>
              </RevealAnimation>
              <RevealAnimation delay={1.2}>
                <p className="text-gray-300 text-base leading-relaxed">{summary}</p>
              </RevealAnimation>
            </div>
            <div className="space-y-6">
              <RevealAnimation delay={0.9}>
                <h3 className="text-2xl font-bold">What You Can Do</h3>
              </RevealAnimation>
              <RevealAnimation delay={1.2}>
                <p className="text-gray-300 text-base leading-relaxed">{summary}</p>
              </RevealAnimation>
            </div>
          </div>
          <div className="pl-4">
            <RevealAnimation delay={1.4}>
              <Image 
                src={image}
                width={400}
                height={300}
                alt="Article Image"
                unoptimized={true}
                className="rounded-xl w-full h-auto shadow-md border border-bg-light object-cover"
              />
            </RevealAnimation>
            <RevealAnimation delay={1.3}>
              <h3 className="text-lg font-bold mt-8 mb-4">Read More</h3>
            </RevealAnimation>
            <RevealAnimation delay={1.3}>
              <div className="space-y-3">
                {articles.map((article, index) => (
                  <ArticleCard 
                    key={index}
                    {...article}
                  />
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default IssuePopup;
