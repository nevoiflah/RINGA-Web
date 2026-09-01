import {
  motion,
  useMotionTemplate,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Check, Clock, EyeOff, Ghost as GhostIcon, Link2, MapPin, ShieldCheck } from "lucide-react";
import type { Dict } from "../../i18n/translations";
import { Avatar, PEOPLE } from "./primitives";
import { W } from "./timeline";

/* The four features, full-bleed and centred, each morphing into the next around
   the core circle that MorphStage drives (coin → room ring → countdown ring). */

type LayerProps = { p: MotionValue<number>; he: boolean; t: Dict };

const onCircle = (i: number, total: number, r: number) => {
  const ang = ((-90 + (360 / total) * i) * Math.PI) / 180;
  return { x: Math.cos(ang) * r, y: Math.sin(ang) * r };
};

/* ── 02 · ROOMS — invited people gather inside the ring ── */

function Member({ p, src, x, y, idx, selected }: { p: MotionValue<number>; src: string; x: number; y: number; idx: number; selected: boolean }) {
  const inAt = W.roomsIn + 0.04 + idx * 0.01;
  const opacity = useTransform(p, [inAt, inAt + 0.02, W.roomsOut, W.roomsOut + (selected ? 0.02 : 0.005)], [0, 1, 1, 0]);
  const scale = useTransform(p, [inAt, inAt + 0.025], [0, 1]);
  return (
    <div className="absolute" style={{ left: `calc(50% + ${x}vh)`, top: `calc(50% + ${y}vh)`, transform: "translate(-50%,-50%)" }}>
      <motion.div style={{ opacity, scale }} className="relative">
        <Avatar src={src} className="h-[6.4vh] w-[6.4vh]" ring={selected} />
        {selected && (
          <span className="absolute -bottom-1 -end-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#22C55E] ring-2 ring-bg">
            <Check className="h-3 w-3 text-white" strokeWidth={3.5} />
          </span>
        )}
      </motion.div>
    </div>
  );
}

function RoomsLayer({ p, he, t }: LayerProps) {
  const opacity = useTransform(p, [W.roomsIn, W.roomsIn + 0.03, W.roomsOut + 0.01, W.roomsOut + 0.03], [0, 1, 1, 0]);
  const chipO = useTransform(p, [W.roomsIn + 0.05, W.roomsIn + 0.08, W.roomsOut - 0.02, W.roomsOut], [0, 1, 1, 0]);
  const members = PEOPLE.slice(0, 5);
  return (
    <motion.div style={{ opacity }} dir={he ? "rtl" : "ltr"} className="absolute inset-0 grid place-items-center">
      <div className="relative h-full w-full">
        <motion.div style={{ opacity: chipO }} className="absolute left-1/2 top-[calc(50%-25vh)] -translate-x-1/2">
          <div className="glass flex items-center gap-2 rounded-full px-4 py-2 text-[0.82rem] font-bold">
            <Link2 className="h-4 w-4 text-coral" />
            <span className="text-ink/85">{t.story.labels.roomName}</span>
            <span className="font-mono tracking-[0.2em] text-purple">7K3Q</span>
          </div>
        </motion.div>
        {members.map((m, i) => {
          const { x, y } = onCircle(i, members.length, 11.5);
          return <Member key={m.src} p={p} src={m.src} x={x} y={y} idx={i} selected={i === 0} />;
        })}
      </div>
    </motion.div>
  );
}

/* ── 03 · DELAY — held first message + countdown (the core ring) ── */

function DelayLayer({ p, he, t }: LayerProps) {
  const opacity = useTransform(p, [W.delayIn, W.delayIn + 0.03, W.delayOut, W.delayOut + 0.02], [0, 1, 1, 0]);
  const partner = PEOPLE[0];
  return (
    <motion.div style={{ opacity }} dir={he ? "rtl" : "ltr"} className="absolute inset-0">
      {/* held first message (with sender), with clear space above the ring */}
      <div className="absolute left-1/2 top-[calc(50%-16vh)] flex max-w-[70vw] -translate-x-1/2 items-end gap-2">
        <Avatar src={partner.src} className="h-[3.6vh] w-[3.6vh]" />
        <div className="rounded-2xl rounded-es-md bg-gradient-to-br from-coral to-[#ff7e8e] px-3.5 py-2 text-[0.8rem] font-medium text-white shadow-[0_10px_26px_rgba(255,107,107,0.4)]">
          {t.story.labels.firstMessage}
        </div>
      </div>
      {/* clock at the ring centre */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-coral" style={{ filter: "drop-shadow(0 0 10px rgba(255,107,107,0.5))" }}>
        <Clock className="h-[2.8vh] w-[2.8vh]" strokeWidth={1.6} />
      </div>
      {/* countdown label, just below the ring */}
      <div className="absolute left-1/2 top-[calc(50%+10.5vh)] flex -translate-x-1/2 flex-col items-center leading-none">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-coral">{t.story.labels.arrivesIn}</p>
        <p className="mt-1.5 text-[1.4rem] font-black tabular-nums">1{he ? "ש " : "h "}59{he ? "ד" : "m"}</p>
      </div>
    </motion.div>
  );
}

/* ── 04 · CHAT — bubbles flow, the oldest dissolves ── */

function Bubble({ p, mine, text, enter, dissolve }: { p: MotionValue<number>; mine: boolean; text: string; enter: number; dissolve: [number, number] }) {
  const opacity = useTransform(p, [enter, enter + 0.02, dissolve[0], dissolve[1]], [0, 1, 1, 0]);
  const y = useTransform(p, [enter, enter + 0.03, dissolve[0], dissolve[1]], [16, 0, 0, -16]);
  const blurPx = useTransform(p, dissolve, [0, 8]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  return (
    <motion.div style={{ opacity, y, filter }} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] px-4 py-2.5 text-[0.95rem] font-medium shadow-lg ${mine ? "rounded-2xl rounded-ee-md bg-gradient-to-br from-coral to-[#ff7e8e] text-white" : "rounded-2xl rounded-es-md bg-white/[0.08] text-ink ring-1 ring-white/10 backdrop-blur"}`}>
        {text}
      </div>
    </motion.div>
  );
}

function ChatLayer({ p, he, t }: LayerProps) {
  const opacity = useTransform(p, [W.chatIn, W.chatIn + 0.03, W.chatOut, W.chatOut + 0.02], [0, 1, 1, 0]);
  const far: [number, number] = [2, 3];
  return (
    <motion.div style={{ opacity }} dir={he ? "rtl" : "ltr"} className="absolute inset-0 grid place-items-center">
      <div className="flex w-[min(86vw,380px)] flex-col gap-3">
        <Bubble p={p} mine text={t.story.labels.firstMessage} enter={W.chatIn} dissolve={[W.chatHold + 0.01, W.chatOut - 0.01]} />
        <Bubble p={p} mine={false} text={t.story.labels.replyThem} enter={W.chatIn + 0.025} dissolve={far} />
        <Bubble p={p} mine text={t.story.labels.replyMe} enter={W.chatIn + 0.05} dissolve={far} />
      </div>
    </motion.div>
  );
}

/* ── 05 · GHOST — vanish, zones, moderation ── */

function GhostChip({ p, at, className, children }: { p: MotionValue<number>; at: number; className?: string; children: React.ReactNode }) {
  const opacity = useTransform(p, [at, at + 0.025, W.ghostOut - 0.03, W.ghostOut - 0.01], [0, 1, 1, 0]);
  const y = useTransform(p, [at, at + 0.04], [20, 0]);
  return (
    <motion.div style={{ opacity, y }} className={className}>{children}</motion.div>
  );
}

function GhostLayer({ p, he, t }: LayerProps) {
  const ghostO = useTransform(p, [W.chatOut - 0.02, W.ghostIn + 0.03, W.ghostOut - 0.02, W.ghostOut], [0, 1, 1, 0]);
  const ghostScale = useTransform(p, [W.chatOut - 0.02, W.ghostIn + 0.04], [0.4, 1]);
  return (
    <motion.div dir={he ? "rtl" : "ltr"} className="absolute inset-0 grid place-items-center">
      <div className="relative flex w-[min(92vw,540px)] flex-col items-center">
        <motion.div style={{ opacity: ghostO, scale: ghostScale }} className="relative grid place-items-center">
          <span aria-hidden className="absolute h-44 w-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(192,132,252,0.3), transparent 65%)" }} />
          <span style={{ animation: "soft-bob 4s ease-in-out infinite" }}>
            <GhostIcon className="h-[14vh] w-[14vh] text-ink/90" strokeWidth={1.1} style={{ filter: "drop-shadow(0 0 22px rgba(192,132,252,0.55))" }} />
          </span>
          <div className="glass mt-5 flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-bold">
            <EyeOff className="h-4 w-4 text-purple" />
            {t.story.labels.ghostMode}
          </div>
        </motion.div>

        <div className="mt-8 grid w-full grid-cols-1 gap-3 px-2 sm:grid-cols-2">
          <GhostChip p={p} at={W.ghostIn + 0.06} className="glass rounded-2xl p-3.5 text-start">
            <div className="relative flex h-24 overflow-hidden rounded-xl bg-gradient-to-br from-purple/12 to-coral/12">
              {[{ l: "26%", tp: "36%", label: t.story.labels.zoneHome }, { l: "66%", tp: "62%", label: t.story.labels.zoneWork }].map((z) => (
                <div key={z.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: z.l, top: z.tp }}>
                  <span className="block h-12 w-12 rounded-full border border-purple/40 bg-purple/15" />
                  <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-black/55 px-1.5 py-0.5 text-[9px] font-bold text-white">
                    <MapPin className="h-2.5 w-2.5 text-purple" />{z.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2.5 text-[0.78rem] font-semibold text-ink/70">{t.story.labels.zoneHome} · {t.story.labels.zoneWork}</p>
          </GhostChip>

          <GhostChip p={p} at={W.ghostIn + 0.1} className="glass rounded-2xl p-3.5 text-start">
            <div className="flex items-center gap-2 text-coral">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-[0.78rem] font-bold uppercase tracking-wide">{t.story.labels.moderated}</span>
            </div>
            <div className="mt-2.5 rounded-xl bg-white/[0.05] px-3 py-2.5 ring-1 ring-white/10">
              <span className="select-none text-[0.95rem] font-medium text-ink/40 line-through blur-[3px]">✦✦✦✦ ✦✦✦✦✦</span>
            </div>
          </GhostChip>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features({ p, he, t }: LayerProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <RoomsLayer p={p} he={he} t={t} />
      <DelayLayer p={p} he={he} t={t} />
      <ChatLayer p={p} he={he} t={t} />
      <GhostLayer p={p} he={he} t={t} />
    </div>
  );
}
