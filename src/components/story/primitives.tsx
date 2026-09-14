import {
  motion,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "framer-motion";
import InfinityLogo from "../InfinityLogo";

/* ──────────────────────────────────────────────
   Shared atoms for the scroll story. Every scene
   is driven off the same global scroll progress
   `p` ∈ [0,1]; nothing here mounts/unmounts, so
   the scrubbing stays perfectly continuous.
   ────────────────────────────────────────────── */

export const INF_PATH =
  "M28,25 C28,12 46,12 50,25 C54,38 72,38 72,25 C72,12 54,12 50,25 C46,38 28,38 28,25 Z";

export type Person = { src: string; name: { he: string; en: string }; dist: string };

/** Real profile photos shipped in /public/app. */
export const PEOPLE: Person[] = [
  { src: "/app/p-tal.webp", name: { he: "טל", en: "Tal" }, dist: "40m" },
  { src: "/app/p-elad.webp", name: { he: "אלעד", en: "Elad" }, dist: "80m" },
  { src: "/app/p-noa.webp", name: { he: "נועה", en: "Noa" }, dist: "120m" },
  { src: "/app/p-omer.webp", name: { he: "עומר", en: "Omer" }, dist: "65m" },
  { src: "/app/p-dor.webp", name: { he: "דור", en: "Dor" }, dist: "150m" },
  { src: "/app/p-alona.webp", name: { he: "אלונה", en: "Alona" }, dist: "95m" },
];

export type SceneProps = {
  p: MotionValue<number>;
  he: boolean;
  dir: "rtl" | "ltr";
};

/** Round profile photo with a soft brand ring. */
export function Avatar({
  src,
  className = "",
  ring = true,
}: {
  src: string;
  className?: string;
  ring?: boolean;
}) {
  return (
    <span
      className={`relative inline-block overflow-hidden rounded-full ${
        ring ? "ring-2 ring-white/70" : ""
      } ${className}`}
      style={ring ? { boxShadow: "0 6px 20px rgba(0,0,0,0.45)" } : undefined}
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
    </span>
  );
}

/**
 * The headline copy for a scene. Fades + lifts in over its window and
 * out the far side, pinned to the lower third so the visual owns the stage.
 */
export function SceneCaption({
  p,
  range,
  n,
  eyebrow,
  title,
  description,
  dir,
}: {
  p: MotionValue<number>;
  /** [enter, peakStart, peakEnd, exit] in global progress. */
  range: [number, number, number, number];
  n: string;
  eyebrow: string;
  title: string;
  description?: string;
  dir: "rtl" | "ltr";
}) {
  const [a, b, c, d] = range;
  const opacity = useTransform(p, [a, b, c, d], [0, 1, 1, 0]);
  const y = useTransform(p, [a, b], [22, 0]);

  return (
    <motion.div
      dir={dir}
      style={{
        opacity,
        y,
        // soft local darkening behind the text - no hard band/edge
        background:
          "radial-gradient(70% 150% at 50% 60%, rgba(4,3,10,0.55) 0%, rgba(4,3,10,0.22) 45%, transparent 78%)",
      }}
      className="pointer-events-none absolute inset-x-0 bottom-[4.5vh] z-30 mx-auto max-w-xl px-6 py-4 text-center"
    >
      <p className="text-[0.76rem] font-bold uppercase tracking-[0.24em] text-coral">
        {n} · {eyebrow}
      </p>
      <h3
        className="mt-2 text-[clamp(1.5rem,3.4vw,2.3rem)] font-black leading-[1.1] tracking-tight"
        style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
      >
        {title}
      </h3>
      {description && <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/80">{description}</p>}
    </motion.div>
  );
}

/**
 * The iOS Live Activity the radar collapses into. The outer motion layer
 * (scaleX/opacity) does the "island stretches open" morph; the inner content
 * fades in once the pill has formed.
 */
export function DynamicIsland({
  style,
  contentStyle,
  count,
  label,
}: {
  style?: MotionStyle;
  contentStyle?: MotionStyle;
  count: number;
  label: string;
}) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-[1.7vh] z-40 -translate-x-1/2">
      <motion.div style={style} className="origin-center">
        <div
          className="flex items-center gap-3 rounded-[22px] bg-black px-3 py-2 ring-1 ring-white/10"
          style={{
            minWidth: 214,
            boxShadow: "0 12px 34px rgba(0,0,0,0.6), 0 0 32px rgba(255,107,107,0.22)",
          }}
        >
          <motion.div style={contentStyle} className="flex w-full items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[11px] bg-white/10">
              <InfinityLogo variant="gradient" className="h-3.5 w-7" />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="text-[0.66rem] font-semibold uppercase tracking-wide text-white/45">
                RINGA
              </p>
              <p className="text-[0.84rem] font-bold text-white">
                {count} <span className="font-medium text-white/70">{label}</span>
              </p>
            </div>
            <span className="relative flex h-7 w-7 shrink-0 items-center justify-center">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full border border-[#34D399]/50"
                style={{ animation: "radar-ping 2s ease-out infinite" }}
              />
              <span
                className="h-2 w-2 rounded-full bg-[#34D399]"
                style={{ animation: "live-dot 1.6s ease-in-out infinite" }}
              />
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
