import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  /** Solid coral (matches the app) or the coral→purple brand gradient. */
  variant?: "coral" | "gradient";
  /** Draw the stroke on when it enters view. */
  draw?: boolean;
};

/** Recreation of RINGA's hand-drawn infinity (∞) mark as a crisp inline SVG. */
export default function InfinityLogo({
  className,
  variant = "gradient",
  draw = false,
}: Props) {
  const reduce = useReducedMotion();
  const id = variant === "gradient" ? "ringa-inf-grad" : undefined;
  const stroke = id ? `url(#${id})` : "var(--color-coral)";

  const path =
    "M28,25 C28,12 46,12 50,25 C54,38 72,38 72,25 C72,12 54,12 50,25 C46,38 28,38 28,25 Z";

  return (
    <svg
      viewBox="0 0 100 50"
      className={className}
      role="img"
      aria-label="RINGA"
      fill="none"
    >
      {id && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-coral)" />
            <stop offset="100%" stopColor="var(--color-purple)" />
          </linearGradient>
        </defs>
      )}
      <motion.path
        d={path}
        stroke={stroke}
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={draw && !reduce ? { pathLength: 0, opacity: 0 } : undefined}
        whileInView={draw && !reduce ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={draw ? { once: true } : undefined}
        transition={draw ? { duration: 1.1, ease: [0.22, 1, 0.36, 1] } : undefined}
      />
    </svg>
  );
}
