import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLang } from "../../i18n/LanguageContext";
import { ChevronDown } from "../icons";
import MorphStage, { NearbyDelay } from "./MorphStage";
import StaticStory from "./StaticStory";

const WINDOWS = {
  radar: [.08, .13, .24, .29],
  rooms: [.29, .35, .58, .64],
  chat: [.64, .69, .75, .80],
  ghost: [.80, .84, .93, .98],
} as const;

function Caption({ scene, p }: { scene: keyof typeof WINDOWS; p: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const { t, dir } = useLang();
  const copy = t.story.scenes[scene];
  const opacity = useTransform(p, [...WINDOWS[scene]], [0, 1, 1, 0]);
  const y = useTransform(p, [WINDOWS[scene][0], WINDOWS[scene][1]], [12, 0]);
  return <motion.div style={{ opacity, y }} dir={dir} className="story-caption absolute inset-x-0 bottom-[5%] mx-auto max-w-xl px-6 text-center">
    <p className="text-xs font-bold uppercase tracking-[.2em] text-coral">{copy.eyebrow}</p>
    <h2 className="mt-2 text-[clamp(1.5rem,3.4vw,2.3rem)] font-black leading-tight">{copy.title}</h2>
    <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink/75">{copy.desc}</p>
    {scene === "radar" && <NearbyDelay t={t} />}
  </motion.div>;
}

export default function ScrollStory() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const cue = useTransform(p, [0, .035], [1, 0]);
  if (reduce) return <StaticStory />;
  return <section ref={trackRef} id="top" className="relative h-[700svh]">
    <h1 className="sr-only">RINGA - {t.hero.sub}</h1>
    <div className="sticky top-0 h-svh overflow-hidden">
      <MorphStage p={p} he={lang === "he"} t={t} />
      {(Object.keys(WINDOWS) as (keyof typeof WINDOWS)[]).map(scene => <Caption key={scene} scene={scene} p={p} />)}
      <motion.div style={{ opacity: cue }} className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-xs text-muted"><span>{t.hero.scroll}</span><ChevronDown className="h-4 w-4" /></motion.div>
    </div>
  </section>;
}
