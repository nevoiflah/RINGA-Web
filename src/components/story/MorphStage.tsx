import { useEffect, useRef, useState } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { Dict } from "../../i18n/translations";
import { Avatar, INF_PATH, PEOPLE } from "./primitives";
import { W } from "./timeline";

/* ──────────────────────────────────────────────
   The opener + the persistent core circle. The ∞
   becomes the radar's centre, minimises into the
   Live Activity coin, then the SAME circle expands
   into the Rooms ring and shrinks into the Delay
   countdown ring — one element through the whole
   first half. Feature content lives in <Features/>.
   ────────────────────────────────────────────── */

const C = { orange: "#F27059", orangeLight: "#F4845F", purple: "#9B7FA7", panel: "#241520", root: "#1A0F1E", sub: "#A89090" };
const ARC = 2 * Math.PI * 47;

type Anchors = { bannerX: number; bannerY: number; bannerScale: number };

function Ring({ p, s, i }: { p: MotionValue<number>; s: number; i: number }) {
  const inA = 0.09 + i * 0.012;
  const scale = useTransform(p, [inA, inA + 0.05, W.scanEnd, W.minEnd], [0, 1, 1, 0]);
  const opacity = useTransform(p, [inA, inA + 0.03, W.scanEnd, W.minEnd], [0, 1, 1, 0]);
  return (
    <motion.span
      style={{ x: "-50%", y: "-50%", scale, opacity, width: `${s * 100}%`, height: `${s * 100}%` }}
      className="absolute left-1/2 top-1/2 rounded-full border border-coral/25"
    />
  );
}

function Blip({ p, src, dist, top, left, order }: { p: MotionValue<number>; src: string; dist: string; top: string; left: string; order: number }) {
  const s0 = 0.135 + order * 0.012;
  const opacity = useTransform(p, [s0, s0 + 0.02, W.scanEnd, W.minEnd - 0.02], [0, 1, 1, 0]);
  const scale = useTransform(p, [s0, s0 + 0.03, W.minEnd - 0.02, W.minEnd], [0.2, 1, 1, 0.2]);
  return (
    <div className="absolute" style={{ top, left }}>
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div style={{ opacity, scale }} className="relative">
          <span aria-hidden className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-coral/50" style={{ animation: "radar-ping 2.6s ease-out infinite" }} />
          <Avatar src={src} className="h-10 w-10" />
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/55 px-1.5 py-0.5 text-[9px] font-bold text-white backdrop-blur">{dist}</span>
        </motion.div>
      </div>
    </div>
  );
}

export default function MorphStage({ p, he, t }: { p: MotionValue<number>; he: boolean; t: Dict }) {
  const [a, setA] = useState<Anchors>({ bannerX: -96, bannerY: 0, bannerScale: 0.5 });
  const stageRef = useRef<HTMLDivElement>(null);
  const coinBoxRef = useRef<HTMLDivElement>(null);
  const bannerSlotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      const stage = stageRef.current, coin = coinBoxRef.current, slot = bannerSlotRef.current;
      if (!stage || !coin || !slot) return;
      const sc = stage.getBoundingClientRect();
      const sb = slot.getBoundingClientRect();
      const coinW = coin.offsetWidth || 1;
      setA({
        bannerX: sb.left + sb.width / 2 - (sc.left + sc.width / 2),
        bannerY: sb.top + sb.height / 2 - (sc.top + sc.height / 2),
        bannerScale: sb.width / coinW,
      });
    };
    measure();
    const tmo = setTimeout(measure, 250);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(tmo); window.removeEventListener("resize", measure); };
  }, [he]);

  // core circle scale: ∞(big) → radar centre → coin → banner slot → coin → room ring → countdown ring
  const coreScale = useTransform(
    p,
    [0, W.fillEnd, W.shrink, W.scanEnd, W.minEnd, W.bannerIn, W.bannerIn + 0.025, W.bannerOut - 0.025, W.bannerOut, W.roomsIn, W.roomsIn + 0.05, W.roomsOut, W.roomsOut + 0.03, W.delayHold, W.delayOut],
    [4.6, 4.6, 0.8, 0.8, 1, 1, a.bannerScale, a.bannerScale, 1, 1, 3.8, 3.8, 1.7, 1.7, 1.7],
  );
  const coreX = useTransform(p, [W.bannerIn, W.bannerIn + 0.025, W.bannerOut - 0.025, W.bannerOut], [0, a.bannerX, a.bannerX, 0]);
  const coreY = useTransform(p, [W.bannerIn, W.bannerIn + 0.025, W.bannerOut - 0.025, W.bannerOut], [0, a.bannerY, a.bannerY, 0]);
  const coreOpacity = useTransform(p, [W.delayOut - 0.02, W.delayOut + 0.02], [1, 0]);

  const drawFill = useTransform(p, [0, W.fillEnd], [0, 1]);
  const outlineO = useTransform(p, [0, W.fillEnd, W.fillEnd + 0.02], [1, 1, 0]);
  const infGradO = useTransform(p, [W.scanEnd, W.minEnd], [1, 0]);
  const coinO = useTransform(p, [W.scanEnd, W.minEnd, W.roomsIn, W.roomsIn + 0.04], [0, 1, 1, 0]); // disc + ∞
  const ringO = useTransform(p, [W.roomsIn, W.roomsIn + 0.04, W.delayOut - 0.02, W.delayOut + 0.01], [0, 1, 1, 0]);
  const arcO = useTransform(p, [W.delayIn, W.delayIn + 0.02, W.delayOut - 0.02, W.delayOut], [0, 1, 1, 0]);
  const arcOffset = useTransform(p, [W.delayIn + 0.01, W.delayHold + 0.02], [ARC, ARC * 0.08]);

  const radarBodyO = useTransform(p, [0.09, 0.14, W.scanEnd, W.minEnd], [0, 1, 1, 0]);
  const scanO = useTransform(p, [0.115, 0.135, 0.17, 0.182], [0, 1, 1, 0]);
  const foundO = useTransform(p, [0.17, 0.185, W.scanEnd, W.minEnd - 0.02], [0, 1, 1, 0]);

  const bannerO = useTransform(p, [W.bannerIn + 0.02, W.bannerIn + 0.05, W.bannerOut - 0.05, W.bannerOut - 0.01], [0, 1, 1, 0]);
  const bannerTextX = useTransform(p, [W.bannerIn + 0.03, W.bannerIn + 0.07], [he ? 18 : -18, 0]);

  return (
    <div ref={stageRef} className="pointer-events-none absolute inset-0 z-10">
      {/* RADAR body */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div style={{ opacity: radarBodyO }} className="relative grid h-[min(62vw,290px,38vh)] w-[min(62vw,290px,38vh)] place-items-center">
          {[1, 0.66, 0.36].map((s, i) => (<Ring key={s} p={p} s={s} i={i} />))}
          <span aria-hidden className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(from 0deg, rgba(255,107,107,0) 0deg, rgba(255,107,107,0.32) 46deg, rgba(255,107,107,0) 92deg)", animation: "radar-spin 4.2s linear infinite" }} />
          <Blip p={p} src={PEOPLE[0].src} dist={PEOPLE[0].dist} top="26%" left="32%" order={0} />
          <Blip p={p} src={PEOPLE[1].src} dist={PEOPLE[1].dist} top="34%" left="70%" order={1} />
          <Blip p={p} src={PEOPLE[2].src} dist={PEOPLE[2].dist} top="66%" left="62%" order={2} />
          <Blip p={p} src={PEOPLE[3].src} dist={PEOPLE[3].dist} top="62%" left="26%" order={3} />
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
            <div className="relative h-8 w-44">
              <motion.span style={{ opacity: scanO }} className="glass absolute inset-0 flex items-center justify-center gap-2 rounded-full text-[0.8rem] font-semibold text-ink/80">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-coral" />{t.story.labels.scanning}
              </motion.span>
              <motion.span style={{ opacity: foundO }} className="glass absolute inset-0 flex items-center justify-center gap-2 rounded-full text-[0.8rem] font-bold text-ink">
                <span className="text-coral">4</span> {t.story.labels.nearby}
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* LIVE ACTIVITY banner */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div dir={he ? "rtl" : "ltr"} style={{ opacity: bannerO, background: `linear-gradient(135deg, ${C.panel}, ${C.root})`, boxShadow: "0 22px 60px rgba(0,0,0,0.6)" }} className="flex items-center gap-3.5 rounded-[28px] px-4 py-3.5 ring-1 ring-white/10">
          <span ref={bannerSlotRef} className="h-[4.6vh] w-[4.6vh] shrink-0" />
          <motion.div style={{ x: bannerTextX }} className="flex items-center gap-3.5">
            <div className="min-w-0 text-start" style={{ color: C.sub }}>
              <div className="flex items-center gap-1.5">
                <span className="text-[0.84rem] font-black tracking-wide text-white">RINGA</span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: C.orange }} />
              </div>
              <p className="text-[1.05rem] font-extrabold leading-tight text-white">4 {he ? "אנשים בסביבה" : "people nearby"}</p>
              <p className="text-[0.78rem] font-medium">{he ? "לחץ כדי לראות מי קרוב" : "Tap to see who's close"}</p>
            </div>
            <div className="shrink-0 text-center leading-none">
              <p className="text-[2.1rem] font-black tabular-nums" style={{ backgroundImage: `linear-gradient(135deg, ${C.orangeLight}, ${C.orange})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>4</p>
              <p className="text-[0.72rem] font-semibold" style={{ color: C.sub }}>{he ? "בסביבה" : "nearby"}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* THE CORE — ∞ → coin → room ring → countdown ring */}
      <div className="absolute inset-0 grid place-items-center">
        <motion.div style={{ x: coreX, y: coreY, scale: coreScale, opacity: coreOpacity }}>
          <div ref={coinBoxRef} className="relative grid h-[9vh] w-[9vh] place-items-center">
            {/* filled coin disc */}
            <motion.span style={{ opacity: coinO }} className="absolute inset-0 rounded-full ring-1 ring-white/25">
              <span className="absolute inset-0 rounded-full" style={{ background: `linear-gradient(135deg, ${C.orangeLight} 0%, ${C.orange} 48%, ${C.purple} 100%)`, boxShadow: "0 0 30px rgba(255,138,92,0.5)" }} />
            </motion.span>
            {/* hollow ring + countdown arc */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" fill="none" style={{ filter: "drop-shadow(0 0 8px rgba(255,107,107,0.4))" }}>
              <motion.circle cx="50" cy="50" r="47" stroke="var(--color-coral)" strokeWidth="1" style={{ opacity: ringO }} />
              <motion.circle cx="50" cy="50" r="47" stroke="var(--color-coral)" strokeWidth="2" strokeLinecap="round" strokeDasharray={ARC} style={{ strokeDashoffset: arcOffset, opacity: arcO }} />
            </svg>
            {/* the ∞ */}
            <svg viewBox="0 0 100 50" className="relative h-[4.6vh] w-[7vh]" fill="none">
              <defs>
                <linearGradient id="morph-inf" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--color-coral)" />
                  <stop offset="100%" stopColor="var(--color-purple)" />
                </linearGradient>
              </defs>
              <motion.path d={INF_PATH} stroke="rgba(255,255,255,0.26)" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: outlineO }} />
              <motion.path d={INF_PATH} stroke="url(#morph-inf)" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" style={{ pathLength: drawFill, opacity: infGradO }} />
              <motion.path d={INF_PATH} stroke="#fff" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: coinO }} />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
