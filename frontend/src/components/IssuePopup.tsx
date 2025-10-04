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
      <div className="p-12 h-full overflow-y-auto">
        <div className="grid grid-cols-[2fr_1fr] gap-4">
          <div className="space-y-8 px-4">
            <div className="space-y-4">
              <RevealAnimation delay={0.9}>
                <h3 className="text-4xl font-semibold tracking-wider">{title}</h3>
                <p className="p-2 bg-bg font-mono mt-4 w-fit shadow-md rounded-xl">📌 {city}</p>
              </RevealAnimation>
              <RevealAnimation delay={1.2}>
                <p className="text-gray-300 text-lg mt-1">{summary}</p>
              </RevealAnimation>
            </div>
            <div className="space-y-4">
              <RevealAnimation delay={0.9}>
                <h3 className="text-3xl font-bold">What You Can Do</h3>
              </RevealAnimation>
              <RevealAnimation delay={1.2}>
                <p className="text-gray-300 text-lg mt-1">{summary}</p>
              </RevealAnimation>
            </div>
          </div>
          <div className="px-4">
            <RevealAnimation delay={1.4}>
              <Image 
                src={image}
                width={400}
                height={300}
                alt="Article Image"
                unoptimized={true}
                className="rounded-lg mx-auto shadow-sm border border-bg-light"
              />
            </RevealAnimation>
            <RevealAnimation delay={1.3}>
              <h3 className="text-xl font-bold mt-12 mb-4">Read More</h3>
            </RevealAnimation>
            <RevealAnimation delay={1.3}>
              <div className="space-y-4">
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
