import { Radar, Send, Users, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const ICONS: LucideIcon[] = [Radar, Users, Send];

export default function Steps() {
  const { t } = useLang();
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <Reveal className="text-center">
        <p className="text-[0.8rem] font-bold uppercase tracking-[0.24em] text-coral">
          {t.steps.eyebrow}
        </p>
        <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-black tracking-tight">
          {t.steps.title}
        </h2>
        <p className="mx-auto mt-3.5 max-w-md leading-relaxed text-muted">{t.steps.sub}</p>
      </Reveal>

      <div className="relative mt-14 grid gap-5 md:grid-cols-3">
        {/* connecting line on desktop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[18%] top-[52px] hidden h-px bg-gradient-to-r from-coral/0 via-purple/45 to-coral/0 md:block"
        />
        {t.steps.items.map((s, i) => {
          const Icon = ICONS[i] ?? Radar;
          return (
            <Reveal key={i} index={i} className="relative">
              <div className="flex h-full flex-col items-center px-6 py-4 text-center">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-coral/15 text-coral ring-1 ring-coral/25">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full text-[0.72rem] font-black text-coral backdrop-blur-sm" style={{ background: "rgba(8,6,14,0.7)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
                <h3 className="mt-6 text-[1.15rem] font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
