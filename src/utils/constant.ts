import { Variants } from "motion/react";

export const containerVarients: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 50,
      duration: 0.8,
    },
  },
};

export const buttonVarient = {
  scale: 1.05,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 10,
  },
} as const;
