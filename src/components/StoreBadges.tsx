import type { ReactNode } from "react";
import { useLang } from "../i18n/LanguageContext";
import { STORE_LINKS } from "../i18n/translations";
import { AppleIcon, GooglePlayIcon } from "./icons";

type BadgeProps = {
  sub: string;
  name: string;
  icon: ReactNode;
  label: string;
  href?: string;
};

function Badge({ sub, name, icon, label, href }: BadgeProps) {
  const content = (
    <>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-ink">
        {icon}
      </span>
      <span className="flex flex-col text-start leading-tight">
        <span className="text-[0.68rem] font-medium text-white/90">{sub}</span>
        <span className="text-[0.95rem] font-extrabold">{name}</span>
      </span>
    </>
  );
  const className = `inline-flex select-none items-center gap-3 rounded-2xl px-5 py-3.5 text-ink ${
    href ? "transition-transform hover:-translate-y-0.5" : "cursor-default"
  }`;
  const style = { background: href ? "linear-gradient(110deg, #FF7A52, #FF4F5E, #F52C72, #A72BA0)" : "#29172A", backdropFilter: "blur(8px)" };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      aria-label={label}
        className={className}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <div role="img" aria-label={label} className={className} style={style}>
      {content}
    </div>
  );
}

export default function StoreBadges({ className = "" }: { className?: string }) {
  const { t } = useLang();
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* coming-soon status pill */}
      <span className="inline-flex items-center gap-2 rounded-full bg-coral/15 px-4 py-1.5 text-[0.78rem] font-bold tracking-wide text-coral">
        <span
          className="h-1.5 w-1.5 rounded-full bg-coral"
          style={{ animation: "blink 2s ease-in-out infinite" }}
        />
        {t.badges.comingSoon}
      </span>

      <div className="flex flex-wrap items-center justify-center gap-3.5">
        <Badge
          sub={t.badges.appStoreSub}
          name={t.badges.appStoreName}
          icon={<AppleIcon className="h-6 w-6" />}
          label={t.badges.appStoreName}
          href={STORE_LINKS.appStore}
        />
        <Badge
          sub={t.badges.playSub}
          name={t.badges.playName}
          icon={<GooglePlayIcon className="h-6 w-6" />}
          label={`${t.badges.playName} - ${t.badges.comingSoon}`}
        />
      </div>
    </div>
  );
}
