import { useLang } from "../i18n/LanguageContext";
import InfinityLogo from "./InfinityLogo";
import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

export default function CTA() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-20 text-center sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[760px] max-w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-coral to-purple opacity-[0.1] blur-[140px]"
      />
      <Reveal>
        <InfinityLogo
          variant="gradient"
          draw
          className="relative mx-auto h-9 w-[72px]"
        />
        <h2 className="relative mt-7 text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-tight">
          {t.cta.title1}
          <br />
          <span className="text-gradient">{t.cta.title2}</span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-muted">{t.cta.body}</p>
        <div className="relative mt-11">
          <StoreBadges />
        </div>
      </Reveal>
    </section>
  );
}
