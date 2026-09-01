import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../../i18n/LanguageContext";
import { ChevronDown } from "../icons";
import Features from "./Features";
import MorphStage from "./MorphStage";
import { SceneCaption } from "./primitives";
import StaticStory from "./StaticStory";

/* Caption windows (story-track progress). Radar covers the scan; the LA/coin beat
   runs caption-free (the visual is the hero); then one per feature. */
const CAP = {
  radar: [0.1, 0.14, 0.2, 0.26],
  rooms: [0.48, 0.51, 0.55, 0.58],
  delay: [0.6, 0.63, 0.67, 0.7],
  chat: [0.72, 0.74, 0.79, 0.81],
  ghost: [0.84, 0.86, 0.92, 0.95],
} as const;

export default function ScrollStory() {
  const { t, dir, lang } = useLang();
  const he = lang === "he";
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLElement>(null);

  const { scrollYProgress: p } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const cueO = useTransform(p, [0, 0.035], [1, 0]);

  if (reduce) return <StaticStory />;

  const caption = (k: keyof typeof CAP, scene: keyof typeof t.story.scenes) => {
    const c = t.story.scenes[scene];
    return (
      <SceneCaption
        p={p}
        range={CAP[k] as unknown as [number, number, number, number]}
        n={c.n}
        eyebrow={c.eyebrow}
        title={c.title}
        dir={dir}
      />
    );
  };

  return (
    <section ref={trackRef} id="top" className="relative h-[1000vh]">
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* background (gradient + 3D particles) is now page-wide, behind everything */}

        {/* all centred content sits a touch above middle, leaving a clean band
            for the captions below — shifted uniformly so the morph stays aligned */}
        <div className="absolute inset-0 -translate-y-[5vh]">
          {/* opener + core circle: ∞ → radar → Live Activity coin → room/countdown ring */}
          <MorphStage p={p} he={he} t={t} />
          {/* full-bleed features that morph into each other around the core */}
          <Features p={p} he={he} t={t} />
        </div>

        {/* captions */}
        {caption("radar", "radar")}
        {caption("rooms", "rooms")}
        {caption("delay", "delay")}
        {caption("chat", "chat")}
        {caption("ghost", "ghost")}

        {/* scroll cue */}
        <motion.div
          style={{ opacity: cueO }}
          className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.74rem] text-ink/60 sm:flex"
        >
          <ChevronDown
            className="h-4 w-4"
            style={{ animation: "scroll-pulse 2s ease-in-out infinite" }}
          />
          <span>{t.hero.scroll}</span>
        </motion.div>
      </div>
    </section>
  );
}
