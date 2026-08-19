"use client";

import { motion, UseInViewOptions } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  viewportOptions?: UseInViewOptions;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction= "fade-in",
  delay= 0,
  duration= 0.5,
  className="",
  viewportOptions = { once: true, margin: '-160px' }
}) => {
  const getInitialPosition = () => {
    switch(direction) {
      case "fade-up":
        return { opacity: 0, y: 40, x: 0 };
      case "fade-down": 
        return { opacity: 0, y: -40, x: 0 };
      case "fade-left": 
        return { opacity: 0, y: 0, x: 40 }; 
      case "fade-right": 
        return { opacity: 0, y: 0, x: -40 };
      case "fade-in":
        return { opacity: 0, y: 0, x: 0 };
      case "none":
        return { opacity: 0, y: 0, x: 0 };
    }
  }
  return (
    <motion.div
      initial={{
        ...getInitialPosition(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={viewportOptions}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      { children }
    </motion.div>
  )
}
