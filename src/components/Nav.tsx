import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";
import { CloseIcon, MenuIcon } from "./icons";
import InfinityLogo from "./InfinityLogo";

type NavLink = { label: string; href?: string; to?: string };

const Brand = () => (
  <span className="inline-flex items-center gap-2">
    <InfinityLogo className="h-5 w-10" />
    <span className="text-gradient text-2xl font-black tracking-wide">RINGA</span>
  </span>
);

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="relative inline-flex items-center rounded-full border border-line bg-white/[0.06] p-0.5"
      role="group"
      aria-label="Language"
    >
      {(["he", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className="relative rounded-full px-3 py-1 text-[0.78rem] font-bold transition-colors"
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-br from-coral to-purple"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={active ? "relative text-white" : "relative text-muted"}>
              {code === "he" ? "עב" : "EN"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function Nav() {
  const { t } = useLang();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation + on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links: NavLink[] = [
    { label: t.footer.privacy, to: "/privacy" },
    { label: t.footer.terms, to: "/terms" },
  ];

  const linkClass =
    "text-[0.88rem] font-medium text-muted transition-colors hover:text-ink";
  const solid = scrolled || open;

  const renderLink = (l: NavLink, onClick?: () => void, className = linkClass) =>
    l.to ? (
      <Link key={l.label} to={l.to} className={className} onClick={onClick}>
        {l.label}
      </Link>
    ) : (
      <a key={l.label} href={l.href} className={className} onClick={onClick}>
        {l.label}
      </a>
    );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
        solid ? "bg-bg/70" : "bg-bg/25"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3.5 sm:px-12">
        {isHome ? (
          <a href="#top" aria-label="RINGA — home">
            <Brand />
          </a>
        ) : (
          <Link to="/" aria-label="RINGA — home">
            <Brand />
          </Link>
        )}

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden items-center gap-6 lg:flex">
            {links.map((l) => renderLink(l))}
          </div>

          <LangToggle />

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/[0.06] text-ink lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-12">
              {links.map((l) =>
                renderLink(
                  l,
                  () => setOpen(false),
                  "rounded-xl px-3 py-3 text-[0.95rem] font-semibold text-muted transition-colors hover:bg-white/[0.04] hover:text-ink",
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
