import { useId } from "react";

type Props = { className?: string; variant?: "coral" | "gradient"; draw?: boolean; rings?: boolean };

/** Transparent vector version of the app's open infinity and radar mark. */
export default function InfinityLogo({ className, variant = "gradient", rings = true }: Props) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 200 150" fill="none" className={className} role="img" aria-label="RINGA">
      <defs>
        <linearGradient id={id} x1="15" y1="35" x2="185" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF7A52" /><stop offset=".33" stopColor="#FF4F5E" />
          <stop offset=".67" stopColor="#F52C72" /><stop offset="1" stopColor="#A72BA0" />
        </linearGradient>
      </defs>
      <g stroke={variant === "coral" ? "#FF6257" : `url(#${id})`}>
        <path d="M90 67 C75 82 65 88 52 88 C17 88 17 33 52 33 C84 33 116 88 148 88 C183 88 183 33 148 33 C135 33 125 39 110 54" strokeWidth="11" strokeLinecap="round" />
        {rings && <g strokeWidth="1.7">
          <ellipse cx="100" cy="107" rx="19" ry="7" />
          <ellipse cx="100" cy="111" rx="42" ry="15" opacity=".8" />
          <ellipse cx="100" cy="115" rx="65" ry="23" opacity=".6" />
          <ellipse cx="100" cy="119" rx="88" ry="30" opacity=".4" />
        </g>}
      </g>
    </svg>
  );
}
