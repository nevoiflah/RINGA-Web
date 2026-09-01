import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { STORE_LINKS } from "../i18n/translations";
import InfinityLogo from "./InfinityLogo";

export default function Footer() {
  const { t } = useLang();
  const links = [
    { label: t.footer.privacy, to: "/privacy" as const },
    { label: t.footer.terms, to: "/terms" as const },
  ];
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* brand */}
          <div className="max-w-xs">
            <span className="inline-flex items-center gap-2">
              <InfinityLogo className="h-5 w-10" />
              <span className="text-gradient text-2xl font-black tracking-wide">RINGA</span>
            </span>
            <p className="mt-3.5 text-[0.92rem] leading-relaxed text-muted">{t.cta.body}</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-coral/15 px-3.5 py-1.5 text-[0.74rem] font-bold tracking-wide text-coral">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" style={{ animation: "blink 2s ease-in-out infinite" }} />
              {t.badges.comingSoon}
            </span>
          </div>

          {/* links */}
          <nav className="flex flex-col gap-3" aria-label="Footer">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="text-[0.9rem] font-medium text-muted transition-colors hover:text-ink">
                {l.label}
              </Link>
            ))}
            <a href={STORE_LINKS.contact} className="text-[0.9rem] font-medium text-muted transition-colors hover:text-ink">
              {t.footer.contact}
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <p className="text-[0.8rem] text-muted">{t.footer.copy}</p>
          <p className="text-[0.78rem] text-muted/70">
            {t.hero.titleLine1} {t.hero.titleLine2} {t.hero.accent}
          </p>
        </div>
      </div>
    </footer>
  );
}
