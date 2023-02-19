export class ScoreSheet {
  aces: number | null = null;
  twos: number | null = null;
  threes: number | null = null;
  fours: number | null = null;
  fives: number | null = null;
  sixes: number | null = null;

  totalUpper: number | null = null;
  bonusUpper: boolean = false;
  grandTotalUpper: number | null = null;

  threeKind: number | null = null;
  fourKind: number | null = null;
  fullHouse: number | null = null;
  smallStr: number | null = null;
  largeStr: number | null = null;
  yahtzee: number | null = null;
  chance: number | null = null;

  yahtzeeBonusCounter: number | null = null;
  yahtzeeBonusTotal: number | null = null;
  grandTotalLower: number | null = null;

  grandTotal: number | null = null;
}
