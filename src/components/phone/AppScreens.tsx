import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Check,
  Clock,
  Coffee,
  EyeOff,
  Link2,
  MapPin,
  MessageCircle,
  Radar,
  Send,
  Settings,
  Share2,
  Users,
} from "lucide-react";
import InfinityLogo from "../InfinityLogo";

/* ──────────────────────────────────────────────
   CSS recreations of the real RINGA app screens
   (warm peach / coral light theme - see the real
   app's constants/theme.ts). Used inside the phone
   mockup in the scroll story.
   ────────────────────────────────────────────── */

type Ico = LucideIcon;
type Tab = "radar" | "rooms" | "chat" | "gear";

const FONT =
  "'Nunito', ui-rounded, 'SF Pro Rounded', system-ui, -apple-system, sans-serif";
const CORAL = "#FF6657";
const GRAD = "linear-gradient(135deg, #FF7A52, #FF4F5E, #F52C72, #A72BA0)";

/* Shared chrome ───────────────────────────────── */

function StatusBar() {
  return (
    <div
      dir="ltr"
      className="relative z-10 flex items-center justify-between px-6 pt-3 pb-1 text-[12px] font-extrabold text-[#1A1A1A]"
    >
      <span className="tracking-tight">9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 15 11" fill="currentColor">
          <path d="M7.5 2.5c2 0 3.8.8 5.1 2l1.1-1.2A9 9 0 0 0 1.3 3.3L2.4 4.5A7 7 0 0 1 7.5 2.5z" />
          <path d="M7.5 6c1 0 2 .4 2.7 1.1l1.1-1.2a6 6 0 0 0-7.6 0l1.1 1.2C5.5 6.4 6.5 6 7.5 6z" />
          <circle cx="7.5" cy="9.3" r="1.4" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="1" y="1" width="21" height="10" rx="3" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="2.5" y="2.5" width="16" height="7" rx="1.5" fill="currentColor" />
          <rect x="23" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

function TabBar({ active }: { active: Tab }) {
  const item = (key: Tab, Icon: Ico) => {
    const on = active === key;
    return (
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full transition-colors"
        style={
          on
            ? { backgroundImage: GRAD, boxShadow: "0 6px 16px rgba(242,112,89,0.45)", color: "#fff" }
            : { color: "#B9AEB2" }
        }
      >
        <Icon className="h-[21px] w-[21px]" strokeWidth={2.4} />
      </div>
    );
  };
  return (
    <div dir="ltr" className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-2 pb-2">
      <div className="flex items-center gap-1 rounded-full border border-white/70 bg-white/95 p-1.5 shadow-[0_14px_36px_rgba(242,112,89,0.22)] backdrop-blur-xl">
        {item("radar", Radar)}
        {item("rooms", Users)}
        {item("chat", MessageCircle)}
        {item("gear", Settings)}
      </div>
      <div className="h-1 w-28 rounded-full bg-black/20" />
    </div>
  );
}

function Frame({ children, dir }: { children: React.ReactNode; dir: "rtl" | "ltr" }) {
  return (
    <div
      dir={dir}
      className="relative flex h-full w-full flex-col overflow-hidden text-[#1A1A1A]"
      style={{
        fontFamily: FONT,
        background:
          "linear-gradient(165deg, #FFF5F0 0%, #FFE8DD 38%, #FFDDD0 68%, #F5E6F0 100%)",
      }}
    >
      <StatusBar />
      {children}
    </div>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-5 pb-2 pt-1">
      <h3 className="text-[19px] font-extrabold tracking-tight">{title}</h3>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-[0_4px_12px_rgba(242,112,89,0.14)]">
        <InfinityLogo variant="coral" className="h-3 w-6" />
      </span>
    </div>
  );
}

/* Screens ──────────────────────────────────────── */

export function Nearby({ he }: { he: boolean }) {
  return (
    <Frame dir={he ? "rtl" : "ltr"}>
      <div className="flex items-center justify-between px-5 pb-3 pt-1">
        <div className="flex items-center gap-2">
          <InfinityLogo variant="coral" className="h-4 w-8" />
          <span className="text-[17px] font-black tracking-wide">RINGA</span>
        </div>
        <img
          src="/app/p-noa.webp"
          alt=""
          className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-[0_4px_12px_rgba(242,112,89,0.2)]"
        />
      </div>

      <div className="flex-1 px-4 pb-24">
        <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_18px_44px_rgba(242,112,89,0.18)]">
          <div className="relative aspect-[4/5]">
            <img src="/app/p-elad.webp" alt="" className="h-full w-full object-cover" />
            <span className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              {he ? "בקרבתך" : "Nearby"}
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 pt-10 text-white">
              <p className="text-[20px] font-black leading-tight">{he ? "אלעד, 26" : "Elad, 26"}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold backdrop-blur">
                  <MapPin className="h-2.5 w-2.5" />
                  {he ? "בסביבה שלך" : "Nearby"}
                </span>
                <span
                  className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold"
                  style={{ backgroundColor: CORAL }}
                >
                  <Coffee className="h-2.5 w-2.5" />
                  {he ? "קפה" : "Coffee"}
                </span>
              </div>
            </div>
            <div className="absolute inset-x-0 top-3 flex justify-center gap-1.5">
              <span className="h-1 w-5 rounded-full bg-white/90" />
              <span className="h-1 w-2 rounded-full bg-white/45" />
              <span className="h-1 w-2 rounded-full bg-white/45" />
            </div>
          </div>
          <div className="p-3">
            <button
              className="flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-[14px] font-extrabold text-white"
              style={{ backgroundImage: GRAD, boxShadow: "0 10px 22px rgba(242,112,89,0.4)" }}
            >
              <Send className="h-4 w-4" />
              {he ? "שלח הודעה" : "Send message"}
            </button>
          </div>
        </div>
      </div>
      <TabBar active="radar" />
    </Frame>
  );
}

export function Events({ he }: { he: boolean }) {
  const members = [
    { src: "/app/p-tal.webp", he: "טל", en: "Tal", role: he ? "מנהל האירוע" : "Event host", check: false },
    { src: "/app/p-omer.webp", he: "עומר", en: "Omer", role: he ? "הצטרף" : "Joined", check: true },
    { src: "/app/p-alona.webp", he: "אלונה", en: "Alona", role: he ? "באירוע" : "In event", check: false },
    { src: "/app/p-dor.webp", he: "דור", en: "Dor", role: he ? "באירוע" : "In event", check: false },
  ];
  return (
    <Frame dir={he ? "rtl" : "ltr"}>
      <Header title={he ? "אירועים" : "Events"} />
      <div className="flex-1 space-y-3 px-4 pb-24">
        <div className="flex items-center justify-between rounded-[22px] bg-white p-3.5 shadow-[0_12px_30px_rgba(242,112,89,0.12)]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F1E9FB] text-[#A72BA0]">
              <Link2 className="h-[18px] w-[18px]" />
            </span>
            <div>
              <p className="text-[13px] font-extrabold leading-tight">{he ? "אירוע RINGA" : "RINGA Event"}</p>
              <p className="font-mono text-[11px] tracking-[0.2em] text-[#9A8E92]">7K3Q</p>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-extrabold text-white"
            style={{ backgroundImage: GRAD }}
          >
            <Share2 className="h-3 w-3" />
            {he ? "שתף" : "Share"}
          </span>
        </div>

        <div className="rounded-[22px] bg-white p-2 shadow-[0_12px_30px_rgba(242,112,89,0.12)]">
          {members.map((m, i) => (
            <div key={i} className="flex items-center gap-3 px-2 py-2.5">
              <img src={m.src} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-[#FFE3D7]" />
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-extrabold leading-tight">{he ? m.he : m.en}</p>
                <p className="text-[11px] text-[#9A8E92]">{m.role}</p>
              </div>
              {m.check && (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22C55E] text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="px-3 text-center text-[11px] leading-relaxed text-[#A2969A]">
          {he ? "רק מי שתזמין מצטרף - אישור בלחיצה." : "Only who you invite joins - approve with a tap."}
        </p>
      </div>
      <TabBar active="rooms" />
    </Frame>
  );
}

export function Chat({ he }: { he: boolean }) {
  return (
    <Frame dir={he ? "rtl" : "ltr"}>
      {/* chat header */}
      <div className="flex items-center gap-3 px-5 pb-3 pt-1">
        <img src="/app/p-tal.webp" alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" />
        <div className="flex-1">
          <p className="text-[15px] font-extrabold leading-tight">{he ? "טל" : "Tal"}</p>
          <p className="flex items-center gap-1.5 text-[11px] text-[#8A8086]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            {he ? "מחובר/ת" : "online"}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-2.5 px-4 pb-28">
        {/* sent first message (scheduled) */}
        <div className="flex justify-end">
          <div
            className="max-w-[78%] rounded-[20px] rounded-ee-md px-3.5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(242,112,89,0.32)]"
            style={{ backgroundImage: GRAD }}
          >
            {he ? "היי - אתה ממש בקרבת מקום 👀" : "Hey - you're right nearby 👀"}
          </div>
        </div>

        {/* delay countdown banner */}
        <div className="mx-auto flex w-full items-center gap-3 rounded-[20px] border border-[#FCD34D]/40 bg-[#FFF6E2] px-3.5 py-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBBF24]/20 text-[#D97706]">
            <Clock className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-extrabold uppercase tracking-wide text-[#C2860B]">
              {he ? "ההודעה תגיע בעוד" : "Your message arrives in"}
            </p>
            <p className="text-[18px] font-black tabular-nums text-[#7A5A12]">
              1{he ? "ש " : "h "}59{he ? "ד" : "m"}
            </p>
          </div>
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#FBBF24]/30">
            <span className="block h-full w-1/4 rounded-full bg-[#F59E0B]" />
          </div>
        </div>

        {/* input bar */}
        <div className="mt-1 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_8px_20px_rgba(242,112,89,0.1)]">
          <span className="flex-1 text-[12px] text-[#B4A9AD]">{he ? "הקלד הודעה…" : "Message…"}</span>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-white"
            style={{ backgroundImage: GRAD }}
          >
            <Send className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <TabBar active="chat" />
    </Frame>
  );
}

export function Ghost({ he }: { he: boolean }) {
  return (
    <Frame dir={he ? "rtl" : "ltr"}>
      <Header title={he ? "פרטיות" : "Privacy"} />
      <div className="flex-1 space-y-3 px-4 pb-24">
        {/* Ghost Mode */}
        <div className="rounded-[22px] bg-white p-4 shadow-[0_12px_30px_rgba(242,112,89,0.12)]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1E9FB] text-[#A72BA0]">
              <EyeOff className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-[14px] font-extrabold leading-tight">{he ? "מצב רוח רפאים" : "Ghost Mode"}</p>
              <p className="text-[11px] text-[#9A8E92]">{he ? "בלתי נראה לכולם" : "Invisible to everyone"}</p>
            </div>
            <div className="relative h-7 w-12 rounded-full p-0.5" style={{ backgroundImage: GRAD }}>
              <span className="absolute end-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow" />
            </div>
          </div>
        </div>

        {/* Ghost Zones */}
        <div className="rounded-[22px] bg-white p-4 shadow-[0_12px_30px_rgba(242,112,89,0.12)]">
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-extrabold">{he ? "אזורי רוח רפאים" : "Ghost Zones"}</p>
            <span className="rounded-full bg-[#FFE9E1] px-2.5 py-1 text-[11px] font-extrabold text-[#FF6657]">
              {he ? "+ הוסף" : "+ Add"}
            </span>
          </div>
          <div className="relative mt-3 h-24 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F1E9FB] to-[#FFE8DD]">
            {[
              { l: "26%", t: "38%", label: he ? "בית" : "Home" },
              { l: "68%", t: "62%", label: he ? "עבודה" : "Work" },
            ].map((z) => (
              <div key={z.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: z.l, top: z.t }}>
                <span className="block h-10 w-10 rounded-full border-2 border-[#A72BA0]/50 bg-[#A72BA0]/15" />
                <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-white px-1.5 py-0.5 text-[9px] font-extrabold text-[#7A5F87] shadow">
                  <MapPin className="h-2.5 w-2.5" />
                  {z.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* notifications row */}
        <div className="flex items-center gap-3 rounded-[22px] bg-white p-4 shadow-[0_12px_30px_rgba(242,112,89,0.12)]">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE9E1] text-[#FF6657]">
            <Bell className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="text-[14px] font-extrabold leading-tight">{he ? "מישהו חדש בקרבתך" : "Someone new nearby"}</p>
            <p className="text-[11px] text-[#9A8E92]">{he ? "קבל התראה בזמן אמת" : "Get a real-time alert"}</p>
          </div>
          <div className="relative h-7 w-12 rounded-full bg-[#E7DCDF] p-0.5">
            <span className="absolute start-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow" />
          </div>
        </div>
      </div>
      <TabBar active="gear" />
    </Frame>
  );
}
