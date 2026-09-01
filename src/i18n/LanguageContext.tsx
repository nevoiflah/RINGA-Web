import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Dict, type Lang } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: Dict;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ringa-lang";

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "he") return saved;
  } catch {
    /* ignore */
  }
  return "he";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const dir = lang === "he" ? "rtl" : "ltr";

  // Keep <html lang/dir/title> in sync with the active language.
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", dir);
    document.title = translations[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "he" ? "en" : "he")),
    [],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir, t: translations[lang], setLang, toggle }),
    [lang, dir, setLang, toggle],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
