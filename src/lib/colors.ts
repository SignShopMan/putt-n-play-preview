/**
 * Literal class strings so Tailwind can see them. Pairings follow the
 * approved contrast table (brand guide p.7). Putting Green is "large text
 * only", so text-bearing surfaces for `green` fall back to Fairway.
 */
export const surface = {
  fairway: "bg-fairway text-paper",
  green: "bg-fairway text-paper",
  laser: "bg-laser text-paper",
  burst: "bg-burst text-paper",
  vr: "bg-vr text-paper",
  arcade: "bg-arcade text-ink",
  league: "bg-league text-paper",
  gold: "bg-gold text-ink",
  flag: "bg-flag text-paper",
  paper: "bg-paper text-ink",
} as const;

/** Decorative strips (no text) can use the true activity color. */
export const strip = {
  fairway: "bg-fairway",
  green: "bg-green",
  laser: "bg-laser",
  burst: "bg-burst",
  vr: "bg-vr",
  arcade: "bg-arcade",
  league: "bg-league",
  gold: "bg-gold",
  flag: "bg-flag",
  paper: "bg-paper",
} as const;

export type BrandColor = keyof typeof surface;
