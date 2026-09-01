import type { ReactNode } from "react";
import { useLang } from "../i18n/LanguageContext";
import Nav from "./Nav";

/** Shared chrome + typography for the Terms / Privacy documents. */
export function LegalLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const { t } = useLang();

  return (
    <div className="min-h-dvh">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-28">
        <h1 className="text-gradient text-[clamp(2rem,5vw,2.6rem)] font-black tracking-tight">
          {title}
        </h1>
        <p className="mt-1.5 mb-12 text-[0.88rem] text-muted">{subtitle}</p>
        {children}
        <p className="mt-14 border-t border-line pt-6 text-center text-[0.82rem] text-muted">
          RINGA {t.footer.copy}
        </p>
      </article>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2.5 mt-9 text-[1.15rem] font-extrabold text-coral">{children}</h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-1.5 mt-6 text-[1rem] font-bold text-ink">{children}</h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[0.95rem] leading-[1.85] text-[#BBBBD0]">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-3 list-disc space-y-2 ps-5 text-[0.95rem] leading-[1.85] text-[#BBBBD0]">
      {children}
    </ul>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-ink">{children}</strong>;
}

export function Divider() {
  return <div className="my-12 h-px bg-line" />;
}
