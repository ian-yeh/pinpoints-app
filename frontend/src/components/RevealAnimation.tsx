// components/animations/RevealAnimation.tsx
"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface RevealAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const RevealAnimation = ({ 
  children, 
  delay = 0, 
  duration = 1.4,
  className = ""
}: RevealAnimationProps) => {
  return (
    <motion.div
      className={className}
      style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.76, 0, 0.24, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}
