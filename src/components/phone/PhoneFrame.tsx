import type { ReactNode } from "react";

/**
 * Premium iPhone 16 Pro–style mockup frame. Presentational only: it clips
 * `children` inside the screen. Titanium body, real Dynamic Island, thin
 * uniform bezels, screen glare and a deep floating shadow.
 */
export default function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* side buttons — titanium */}
      <span className="absolute -left-[2.5px] top-[16%] h-7 w-[2.5px] rounded-l-md bg-gradient-to-b from-[#4a4a52] to-[#1b1b20]" />
      <span className="absolute -left-[3px] top-[27%] h-12 w-[3px] rounded-l-md bg-gradient-to-b from-[#52525a] to-[#202026]" />
      <span className="absolute -left-[3px] top-[40%] h-12 w-[3px] rounded-l-md bg-gradient-to-b from-[#52525a] to-[#202026]" />
      <span className="absolute -right-[3px] top-[31%] h-20 w-[3px] rounded-r-md bg-gradient-to-b from-[#52525a] to-[#202026]" />

      {/* titanium frame */}
      <div
        className="relative aspect-[9/19.5] w-full rounded-[3rem] p-[3px]"
        style={{
          background:
            "linear-gradient(150deg, #5b5b63 0%, #232329 26%, #0c0c10 60%, #2a2a30 100%)",
          boxShadow:
            "0 50px 90px -28px rgba(0,0,0,0.78), 0 18px 40px -22px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.12), inset 0 1px 1px rgba(255,255,255,0.22)",
        }}
      >
        {/* inner black rail (bezel base) */}
        <div className="relative h-full w-full rounded-[2.78rem] bg-[#050507] p-[8px] shadow-[inset_0_0_3px_2px_rgba(0,0,0,0.9)]">
          {/* screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-black">
            {children}

            {/* Dynamic Island */}
            <div className="pointer-events-none absolute left-1/2 top-[10px] z-30 flex h-[26px] w-[34%] -translate-x-1/2 items-center justify-end gap-2 rounded-full bg-black pr-2.5 shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.04)]">
              {/* camera lens */}
              <span className="h-[7px] w-[7px] rounded-full bg-[#0b0b14] ring-1 ring-[#1c1c2a]">
                <span className="block h-[3px] w-[3px] translate-x-[1.5px] translate-y-[1.5px] rounded-full bg-[#222238]" />
              </span>
            </div>

            {/* screen glare */}
            <div
              className="pointer-events-none absolute inset-0 z-20 rounded-[2.25rem]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 74%, rgba(255,255,255,0.05) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
