import { Link } from "react-router-dom";
import { EyeOff, MapPin, ShieldCheck } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

export default function PrivacyStrip() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <Reveal>
        <div className="relative px-6 py-6 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 h-48 w-[120%] -translate-x-1/2 bg-gradient-to-br from-coral/20 to-purple/20 opacity-40 blur-[90px]"
          />
          <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-coral/15 text-coral ring-1 ring-coral/25">
            <ShieldCheck className="h-7 w-7" />
          </span>
          <h2 className="relative mt-6 text-[clamp(1.6rem,3.4vw,2.2rem)] font-black tracking-tight">
            {t.privacy.title1}{" "}
            <span className="text-gradient">{t.privacy.title2}</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-[460px] leading-relaxed text-muted">
            {t.privacy.body}
          </p>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[0.8rem] font-bold text-ink/85">
              <EyeOff className="h-3.5 w-3.5 text-purple" />
              {t.features.items[2].title}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[0.8rem] font-bold text-ink/85">
              <MapPin className="h-3.5 w-3.5 text-coral" />
              {t.features.items[3].title}
            </span>
          </div>
          <Link
            to="/privacy"
            className="relative mt-6 inline-block text-[0.9rem] font-bold text-purple transition-colors hover:text-coral"
          >
            {t.privacy.link}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
