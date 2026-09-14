import { Clock, Ghost, MessageCircle, Radar, Users, type LucideIcon } from "lucide-react";
import InfinityLogo from "../InfinityLogo";
import { useLang } from "../../i18n/LanguageContext";

/**
 * Reduced-motion fallback: the same five beats as the scroll story, but as a
 * calm, static vertical sequence with no scroll hijacking or large movement.
 */
const ORDER = ["radar", "rooms", "delay", "chat", "ghost"] as const;

const ICONS: Record<(typeof ORDER)[number], LucideIcon> = {
  radar: Radar,
  rooms: Users,
  delay: Clock,
  chat: MessageCircle,
  ghost: Ghost,
};

export default function StaticStory() {
  const { t, dir } = useLang();

  return (
    <section id="top" dir={dir} className="relative mx-auto max-w-2xl px-6 pt-28 pb-12">
      <InfinityLogo className="mx-auto mb-12 h-32 w-40" />
      <h1 className="mb-12 text-center text-3xl font-black">RINGA</h1>
      <div className="flex flex-col gap-14">
        {ORDER.map((key) => {
          const s = t.story.scenes[key];
          const Icon = ICONS[key];
          return (
            <div key={key} className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-coral/20 to-purple/20 text-coral ring-1 ring-coral/20">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-[0.78rem] font-bold uppercase tracking-[0.24em] text-coral">
                {s.n} · {s.eyebrow}
              </p>
              <h3 className="mt-2 text-[clamp(1.6rem,4vw,2.2rem)] font-black leading-tight tracking-tight">
                {s.title}
              </h3>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink/70">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
