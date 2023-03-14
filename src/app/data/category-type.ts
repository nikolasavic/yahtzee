export const categories = [
  'aces',
  'twos',
  'threes',
  'fours',
  'fives',
  'sixes',
  'threeKind',
  'fourKind',
  'fullHouse',
  'smallStr',
  'largeStr',
  'yahtzee',
  'chance',
] as const;

export type Category = (typeof categories)[number];
