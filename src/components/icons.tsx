import type { SVGProps } from "react";
import {
  ChevronDown as LChevronDown,
  Clock,
  Ghost,
  MapPin,
  Menu,
  MessageCircle,
  Radar,
  ShieldCheck,
  X,
  type LucideIcon,
} from "lucide-react";

/** Feature icons (Lucide), keyed by name. */
export const FeatureIcons: Record<string, LucideIcon> = {
  radar: Radar,
  timer: Clock,
  ghost: Ghost,
  pin: MapPin,
  chat: MessageCircle,
  shield: ShieldCheck,
};

export const ChevronDown = LChevronDown;
export const MenuIcon = Menu;
export const CloseIcon = X;

/* Brand glyphs (kept custom - Lucide has no official brand marks). */

export const AppleIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export const GooglePlayIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3.18 23.76c.3.17.65.2.97.08l11.65-11.65L12.12 9.5 3.18 23.76z" fill="#EA4335" />
    <path d="M21.54 10.27l-2.59-1.49-3.27 3.41 3.27 3.27 2.62-1.51c.75-.43.75-1.25-.03-1.68z" fill="#FBBC04" />
    <path d="M2.21.58A1.1 1.1 0 0 0 2 1.26v21.48c0 .25.07.48.21.67L12.12 13.5 2.21.58z" fill="#4285F4" />
    <path d="M15.8 12.19l-3.68-3.69L2.21.58c.3-.17.67-.17.97.01l12.62 7.28-3 4.32z" fill="#34A853" />
  </svg>
);
