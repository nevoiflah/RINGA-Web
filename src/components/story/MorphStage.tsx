import { motion, useTransform, type MotionValue } from "framer-motion";
import { Heart, ShieldCheck, EyeOff, MapPin, Clock } from "lucide-react";
import type { Dict } from "../../i18n/translations";
import InfinityLogo from "../InfinityLogo";
import { Avatar, PEOPLE } from "./primitives";

type Props = { p: MotionValue<number>; he: boolean; t: Dict };
const fade = [0, 1, 1, 0];

function Ring({ p, i }: { p: MotionValue<number>; i: number }) {
  const scale = useTransform(p, [0, .12, .26, .35, .92, 1], [.85, 1, 1, 1.3, 1.3, .85]);
  const scaleY = useTransform(p, [0, .12, .92, 1], [.3, 1, 1, .3]);
  const y = useTransform(p, [0, .12, .92, 1], [82, 0, 0, 82]);
  const opacity = useTransform(p, [0, .1, .26, .35, .92, 1], [.8, .5, .5, 0, 0, .6]);
  return <motion.div style={{ scale, scaleY, y, opacity, inset: `${i * 12}%` }} className="absolute rounded-full border border-coral/45" />;
}

/** Each person keeps the same DOM node as radar positions become list rows. */
function Person({ p, i, he }: { p: MotionValue<number>; i: number; he: boolean }) {
  const person = PEOPLE[i];
  const radar = [[17, 26], [76, 31], [22, 73], [73, 76]][i];
  const left = useTransform(p, [.24, .35, .49, .57], [radar[0] + "%", he ? "86%" : "14%", he ? "86%" : "14%", (i === 0 ? 41 : 59) + "%"]);
  const top = useTransform(p, [.24, .35, .49, .57, .62, .67], [radar[1] + "%", (27 + i * 19) + "%", (27 + i * 19) + "%", "25%", "25%", "17%"]);
  const opacity = useTransform(p, [.075 + i * .01, .13 + i * .01, i < 2 ? .74 : .49, i < 2 ? .81 : .56], fade);
  const scale = useTransform(p, [.49, .57, .62, .67], [1, i < 2 ? 1.2 : .7, 1.2, .8]);
  const detail = useTransform(p, [.28, .35, .48, .54], fade);
  const distance = useTransform(p, [.1, .15, .24, .29], fade);
  const like = useTransform(p, [.44, .48, .61, .66], fade);
  return (
    <motion.div style={{ left, top, opacity }} className="absolute z-20 h-11 w-11 -translate-x-1/2 -translate-y-1/2">
      <motion.div style={{ scale }}><Avatar src={person.src} className="h-11 w-11" /></motion.div>
      <motion.span style={{ opacity: distance }} className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-bg/80 px-2 py-0.5 text-[10px] text-ink/80">{he ? "בסביבה" : "Nearby"}</motion.span>
      <motion.div style={{ opacity: detail }} className={`absolute top-1 flex w-[190px] items-center justify-between ${he ? "right-14 flex-row-reverse text-right" : "left-14"}`}>
        <span><strong className="block text-sm">{person.name[he ? "he" : "en"]}</strong><span className="text-[10px] text-muted">{he ? "באירוע" : "At the event"}</span></span>
        <Heart className="h-4 w-4 text-coral" />
      </motion.div>
      {i < 2 && <motion.span style={{ opacity: like }} className="absolute -right-1 -bottom-1 rounded-full bg-coral p-1 text-white"><Heart className="h-3 w-3 fill-current" /></motion.span>}
    </motion.div>
  );
}

export default function MorphStage({ p, he, t }: Props) {
  const frameOpacity = useTransform(p, [.27, .35, .91, .97], fade);
  const radius = useTransform(p, [.27, .35, .75, .84], [150, 28, 28, 38]);
  const frameScale = useTransform(p, [.27, .35, .91, .98], [.9, 1, 1, .85]);
  const logoScale = useTransform(p, [0, .12, .26, .34, .91, 1], [1.35, .46, .46, .3, .3, 1]);
  const logoOpacity = useTransform(p, [.26, .34, .92, .99], [1, 0, 0, 1]);
  const opener = useTransform(p, [0, .055, .105], [1, 1, 0]);
  const events = useTransform(p, [.29, .36, .48, .54], fade);
  const match = useTransform(p, [.51, .57, .61, .66], fade);
  const chat = useTransform(p, [.63, .69, .75, .81], fade);
  const privacy = useTransform(p, [.77, .83, .91, .97], fade);
  const reply = useTransform(p, [.69, .72], [0, 1]);
  const lastReply = useTransform(p, [.72, .75], [0, 1]);
  const sweep = useTransform(p, [0, .3], [0, 300]);
  const radarOpacity = useTransform(p, [.06, .12, .26, .33], fade);
  const dir = he ? "rtl" : "ltr";

  return (
    <div className="story-visual absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
      {[0, 1, 2].map(i => <Ring key={i} p={p} i={i} />)}
      <motion.div style={{ rotate: sweep, opacity: radarOpacity, background: "conic-gradient(from 0deg, transparent 270deg, #FF625730 360deg)" }} className="absolute inset-0 rounded-full" />
      <motion.div style={{ opacity: frameOpacity, borderRadius: radius, scale: frameScale }} className="absolute inset-0 border border-line bg-surface/90 shadow-[0_24px_80px_#120B1480]" />
      <motion.div style={{ opacity: logoOpacity, scale: logoScale }} className="absolute inset-[18%] flex items-center justify-center"><InfinityLogo className="w-full" rings={false} /></motion.div>
      <motion.div style={{ opacity: opener }} className="absolute inset-x-[-8%] top-full mt-7 text-center">
        <p className="text-gradient text-4xl font-black tracking-[.08em]">RINGA</p>
        <p className="mt-3 text-base text-ink/80">{t.hero.sub}</p>
      </motion.div>
      <motion.div style={{ opacity: events }} dir={dir} className="absolute inset-x-6 top-5 flex items-center justify-between border-b border-line pb-3">
        <strong className="text-sm">{t.story.labels.roomName}</strong><span className="text-[10px] text-coral">QR / Link</span>
      </motion.div>
      {PEOPLE.slice(0, 4).map((person, i) => <Person key={person.src} p={p} i={i} he={he} />)}
      <motion.div style={{ opacity: match }} className="absolute inset-x-5 top-[46%] text-center">
        <Heart className="mx-auto h-9 w-9 fill-coral text-coral" />
        <p className="mt-3 text-2xl font-black">{he ? "יש Match!" : "It's a Match!"}</p>
        <p className="mt-2 text-sm text-muted">{he ? "Like הדדי. אפשר להתחיל לדבר." : "Mutual Likes. Time to say hello."}</p>
      </motion.div>
      <motion.div style={{ opacity: chat }} dir={dir} className="absolute inset-x-5 top-[31%] space-y-3 text-[13px] leading-relaxed">
        <div className="max-w-[87%] rounded-2xl rounded-ss-sm bg-active px-3 py-2">{he ? "היי! כיף לפגוש אותך כאן 👋" : "Hey! Great to meet you here 👋"}</div>
        <motion.div style={{ opacity: reply }} className="ms-auto max-w-[87%] rounded-2xl rounded-se-sm bg-coral/20 px-3 py-2">{t.story.labels.replyThem}</motion.div>
        <motion.div style={{ opacity: lastReply }} className="max-w-[87%] rounded-2xl rounded-ss-sm bg-active px-3 py-2">{t.story.labels.replyMe}</motion.div>
      </motion.div>
      <motion.div style={{ opacity: privacy }} dir={dir} className="absolute inset-x-6 top-7">
        <ShieldCheck className="mx-auto h-10 w-10 text-coral" />
        <p className="mt-3 text-center text-lg font-bold">{he ? "בשליטה שלך" : "You're in control"}</p>
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-card p-3 text-sm"><EyeOff className="h-5 w-5 text-coral" /><span className="flex-1">{t.story.labels.ghostMode}</span><span className="h-4 w-7 rounded-full bg-coral p-0.5"><span className="block h-3 w-3 rounded-full bg-white" /></span></div>
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-card p-3 text-sm"><MapPin className="h-5 w-5 text-purple" />{t.story.labels.zoneHome} · {t.story.labels.zoneWork}</div>
      </motion.div>
    </div>
  );
}

/** The delay feature belongs to Nearby, separately from the EVENT match flow. */
export function NearbyDelay({ t }: { t: Dict }) {
  return <div className="mx-auto mt-4 flex max-w-md items-start justify-center gap-2 text-xs leading-relaxed text-muted"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-coral" /><span>{t.story.scenes.delay.desc}</span></div>;
}
