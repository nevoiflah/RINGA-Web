import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { QrCode, Users, Heart, Clock, MapPinOff, Radar, MessageCircle, Link as LinkIcon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import { Avatar, PEOPLE } from "./story/primitives";

const COPY = {
  en: {
    title: "Same event. New connections.",
    intro: "See who else joined, find someone interesting, and let a mutual Like start the conversation.",
    nearby: "Nearby", nearbyBody: "People within 200 meters, in real time. When they leave your range, they disappear from Nearby.",
    events: "EVENTS", eventsBody: "People who joined the same event by QR or invitation link. Membership doesn't depend on your location.",
    steps: [
      { title: "One scan. You're in.", body: "Scan the event's QR code or open its invitation link to join." },
      { title: "Discover who else joined.", body: "Browse the attendee list, explore profiles, and send a Like to someone who catches your eye." },
      { title: "Mutual Likes. It's a Match.", body: "When you Like each other, you get a Match and can start chatting." },
    ],
    join: "QR or invitation link", attendees: "Event attendees", like: "Like", match: "It's a Match!", chat: "You can start chatting",
    stay: "Leave the venue. Stay in the event.", stayBody: "EVENTS don't use GPS. Once you've joined, you stay in the event even after leaving the venue or closing the app, until the event closes.",
    time: "Know when it closes.", timeBody: "Events last 24 hours by default. Check your event's displayed closing time: it closes at the time set by its organizer.",
    duration: "24h", default: "Default duration",
  },
  he: {
    title: "אותו אירוע. חיבורים חדשים.",
    intro: "גלו מי עוד הצטרף, מצאו מישהו שמעניין אתכם ותנו ל-Like הדדי לפתוח שיחה.",
    nearby: "קרובים", nearbyBody: "אנשים שנמצאים עד 200 מטר מכם, בזמן אמת. כשהם יוצאים מהטווח, הם נעלמים ממסך קרובים.",
    events: "אירועים", eventsBody: "אנשים שהצטרפו לאותו אירוע באמצעות QR או קישור הזמנה. ההצטרפות אינה תלויה במיקום שלכם.",
    steps: [
      { title: "סריקה אחת. ואתם בפנים.", body: "סרקו את קוד ה-QR של האירוע או פתחו את קישור ההזמנה כדי להצטרף." },
      { title: "גלו מי עוד הצטרף.", body: "עיינו ברשימת המשתתפים, גלו פרופילים ושלחו Like למי שמעניין אתכם." },
      { title: "Like הדדי. יש Match.", body: "כשאתם עושים Like אחד לשני, נוצר Match ואפשר להתחיל לדבר." },
    ],
    join: "QR או קישור הזמנה", attendees: "משתתפים באירוע", like: "Like", match: "יש Match!", chat: "אפשר להתחיל לדבר",
    stay: "יוצאים מהמקום. נשארים באירוע.", stayBody: "אירועים לא מבוססים על GPS. מרגע שהצטרפתם, תישארו באירוע גם אם יצאתם מהמקום או סגרתם את האפליקציה, עד לסגירת האירוע.",
    time: "יודעים מתי האירוע נסגר.", timeBody: "משך האירוע כברירת מחדל הוא 24 שעות. בדקו את שעת הסגירה שמוצגת באירוע: הוא נסגר בזמן שהמארגן הגדיר.",
    duration: "24h", default: "משך ברירת המחדל",
  },
};

export default function Events() {
  const { lang, dir } = useLang();
  const copy = COPY[lang];
  const reduce = useReducedMotion();
  const journey = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: journey, offset: ["start 80%", "end 65%"] });
  const icons = [QrCode, Users, Heart];
  return (
    <section id="events" aria-labelledby="events-title" dir={dir} className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[.24em] text-coral">{copy.events}</p>
        <h2 id="events-title" className="mt-3 text-[clamp(2rem,4vw,3rem)] font-black leading-tight">{copy.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{copy.intro}</p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[{ title: copy.nearby, body: copy.nearbyBody, Icon: Radar }, { title: copy.events, body: copy.eventsBody, Icon: Users }].map(({ title, body, Icon }, i) => (
          <Reveal key={title} index={i} className="rounded-3xl border border-line bg-surface/60 p-6">
            <Icon aria-hidden="true" className="h-6 w-6 text-coral" />
            <h3 className="mt-3 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
          </Reveal>
        ))}
      </div>

      <div ref={journey} className="relative mt-12 space-y-6">
        <div aria-hidden="true" className="absolute bottom-12 start-[23px] top-12 w-px bg-line">
          <motion.div style={{ scaleY: reduce ? 1 : scrollYProgress, transformOrigin: "top" }} className="h-full w-full bg-coral" />
        </div>
        {copy.steps.map((step, i) => {
          const Icon = icons[i];
          return <div key={step.title} className="relative grid grid-cols-[48px_1fr] gap-4 sm:gap-6">
            <span aria-hidden="true" className="z-10 mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg text-sm font-bold text-coral">0{i + 1}</span>
            <Reveal y={16} className="grid items-center gap-6 rounded-3xl border border-line bg-surface/70 p-5 sm:p-8 md:grid-cols-2">
              <div><Icon aria-hidden="true" className="h-5 w-5 text-coral" /><h3 className="mt-3 text-xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p></div>
              <div aria-hidden="true" className="flex min-h-40 items-center justify-center rounded-2xl bg-bg/60 p-4">
                {i === 0 && <div className="text-center"><div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-coral/40 text-coral"><QrCode className="h-12 w-12" /></div><p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted"><LinkIcon className="h-3 w-3" />{copy.join}</p></div>}
                {i === 1 && <div className="w-full max-w-60"><p className="mb-3 text-xs text-muted">{copy.attendees}</p>{PEOPLE.slice(0, 3).map((person, n) => <motion.div key={person.src} initial={reduce ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .45, delay: reduce ? 0 : n * .1 }} className="flex items-center gap-3 border-t border-line/60 py-2"><Avatar src={person.src} ring={false} className="h-8 w-8 shrink-0" /><span className="flex-1 text-xs">{person.name[lang]}</span><Heart className="h-4 w-4 text-coral" /></motion.div>)}</div>}
                {i === 2 && <div className="text-center"><div className="flex items-center justify-center gap-3"><Avatar src={PEOPLE[0].src} className="h-12 w-12" /><motion.span initial={reduce ? false : { scale: .6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .5, delay: reduce ? 0 : .2 }}><Heart className="h-7 w-7 fill-coral text-coral" /></motion.span><Avatar src={PEOPLE[1].src} className="h-12 w-12" /></div><p className="mt-4 font-bold text-coral">{copy.match}</p><p className="mt-2 flex items-center justify-center gap-2 text-xs text-muted"><MessageCircle className="h-3 w-3" />{copy.chat}</p></div>}
              </div>
            </Reveal>
          </div>;
        })}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Reveal className="rounded-3xl border border-line bg-surface/50 p-6"><MapPinOff aria-hidden="true" className="h-6 w-6 text-coral" /><h3 className="mt-4 text-lg font-bold">{copy.stay}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{copy.stayBody}</p></Reveal>
        <Reveal index={1} className="rounded-3xl border border-line bg-surface/50 p-6"><div className="flex items-center gap-3"><Clock aria-hidden="true" className="h-6 w-6 text-coral" /><span className="text-xs text-muted"><bdi className="font-bold text-coral">{copy.duration}</bdi> · {copy.default}</span></div><h3 className="mt-4 text-lg font-bold">{copy.time}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{copy.timeBody}</p></Reveal>
      </div>
    </section>
  );
}
