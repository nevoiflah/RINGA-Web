import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger index - adds a small per-item delay for grid/list entrances. */
  index?: number;
  className?: string;
  /** Travel direction of the entrance. */
  y?: number;
  as?: "div" | "section" | "li";
};

/**
 * Scroll-triggered entrance. Fades + lifts into place once on view.
 * Honors prefers-reduced-motion (renders instantly, no transform).
 */
export default function Reveal({
  children,
  index = 0,
  className,
  y = 24,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : index * 0.08,
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </MotionTag>
  );
}
