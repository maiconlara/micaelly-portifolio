"use client";

import { motion, type Variants } from "motion/react";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const buildVariants = (y: number, duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  once = true,
}: RevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={buildVariants(y, duration, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};
