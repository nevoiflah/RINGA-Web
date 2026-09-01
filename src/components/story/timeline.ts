/* Shared scroll milestones (global progress 0→1) for the one continuous story.
   The opener morphs the ∞ into the radar into the Live Activity coin; the coin
   then expands into the Rooms ring, and each feature morphs into the next. */
export const W = {
  // opener
  fillEnd: 0.05,
  shrink: 0.14,
  scanEnd: 0.2,
  minEnd: 0.26,
  bannerIn: 0.29,
  bannerOut: 0.41,
  // features (full-bleed, centred, one flows into the next)
  roomsIn: 0.45,
  roomsHold: 0.52,
  roomsOut: 0.57,
  delayIn: 0.59,
  delayHold: 0.65,
  delayOut: 0.7,
  chatIn: 0.71,
  chatHold: 0.77,
  chatOut: 0.81,
  ghostIn: 0.82,
  ghostHold: 0.89,
  ghostOut: 0.95,
  end: 0.98,
} as const;
