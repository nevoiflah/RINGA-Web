import { motion, useMotionTemplate, useTransform, type MotionValue } from "framer-motion";

/**
 * Page-wide ambient background built from the app's signature: a proximity
 * radar — faint concentric rings, a slow sweep and drifting "blips" — over the
 * real "sensual dark" aubergine palette (theme.ts). Fixed behind every section
 * so the whole site reads as one continuous field. Driven by page scroll.
 */

// app dark palette
const RINGS = [20, 38, 58, 80, 104]; // vmax diameters
const BLIPS = [
  { top: "24%", left: "28%", d: "1.6s" },
  { top: "33%", left: "72%", d: "2.4s" },
  { top: "62%", left: "20%", d: "2.0s" },
  { top: "70%", left: "66%", d: "2.8s" },
  { top: "46%", left: "84%", d: "1.8s" },
  { top: "80%", left: "40%", d: "2.6s" },
];

export default function Background({ progress }: { progress: MotionValue<number> }) {
  // aubergine base with a glow that warms purple → coral as you descend
  const glow = useTransform(
    progress,
    [0, 0.6, 1],
    ["rgba(155,127,167,0.16)", "rgba(244,132,95,0.16)", "rgba(244,132,95,0.22)"],
  );
  const bg = useMotionTemplate`radial-gradient(120% 80% at 50% 16%, ${glow}, transparent 56%), linear-gradient(180deg, #1A0F1E 0%, #241327 46%, #2D1530 72%, #1E0F1D 100%)`;

  // subtle parallax + the sweep fading up a touch as you scroll
  const radarY = useTransform(progress, [0, 1], ["-3%", "7%"]);
  const sweepOpacity = useTransform(progress, [0, 0.5, 1], [0.5, 0.32, 0.2]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* aubergine gradient base */}
      <motion.div aria-hidden style={{ background: bg }} className="absolute inset-0" />

      {/* the radar field */}
      <motion.div style={{ y: radarY }} className="absolute inset-0">
        {/* concentric rings */}
        {RINGS.map((d, i) => (
          <span
            key={d}
            aria-hidden
            className="absolute left-1/2 top-1/2 rounded-full border border-[#F4845F]"
            style={{
              width: `${d}vmax`,
              height: `${d}vmax`,
              opacity: 0.05 + (RINGS.length - i) * 0.012,
              animation: `radar-breathe ${7 + i}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}

        {/* slow sweep */}
        <motion.span
          aria-hidden
          style={{
            opacity: sweepOpacity,
            width: "84vmax",
            height: "84vmax",
            background:
              "conic-gradient(from 0deg, rgba(244,132,95,0) 0deg, rgba(244,132,95,0.12) 38deg, rgba(155,127,167,0.05) 70deg, rgba(244,132,95,0) 96deg)",
            animation: "radar-spin 22s linear infinite",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        />

        {/* drifting blips */}
        {BLIPS.map((b, i) => (
          <span key={i} aria-hidden className="absolute" style={{ top: b.top, left: b.left }}>
            <span className="relative block h-2 w-2 -translate-x-1/2 -translate-y-1/2">
              <span
                className="absolute inset-0 rounded-full border border-[#F4845F]/40"
                style={{ animation: `radar-ping ${b.d} ease-out infinite` }}
              />
              <span className="absolute inset-0 rounded-full bg-[#F4845F]/70" />
            </span>
          </span>
        ))}
      </motion.div>

      {/* edge vignette in the aubergine */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at center, transparent 52%, rgba(16,8,18,0.55) 100%)",
        }}
      />
    </div>
  );
}
