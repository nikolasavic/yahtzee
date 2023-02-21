export class ScoreSheet {
  constructor({
    aces,
    twos,
    threes,
    fours,
    fives,
    sixes,
    totalUpper,
    bonusUpper,
    grandTotalUpper,
    threeKind,
    fourKind,
    fullHouse,
    smallStr,
    largeStr,
    yahtzee,
    chance,
    yahtzeeBonusCounter,
    yahtzeeBonusTotal,
    grandTotalLower,
    grandTotal,
  }: {
    aces?: number;
    twos?: number;
    threes?: number;
    fours?: number;
    fives?: number;
    sixes?: number;
    totalUpper?: number;
    bonusUpper?: boolean;
    grandTotalUpper?: number;
    threeKind?: number;
    fourKind?: number;
    fullHouse?: number;
    smallStr?: number;
    largeStr?: number;
    yahtzee?: number;
    chance?: number;
    yahtzeeBonusCounter?: number;
    yahtzeeBonusTotal?: number;
    grandTotalLower?: number;
    grandTotal?: number;
  }) {
    this.aces = aces;
    this.twos = twos;
    this.threes = threes;
    this.fours = fours;
    this.fives = fives;
    this.sixes = sixes;
    this.totalUpper = totalUpper;
    this.bonusUpper = bonusUpper;
    this.grandTotalUpper = grandTotalUpper;
    this.threeKind = threeKind;
    this.fourKind = fourKind;
    this.fullHouse = fullHouse;
    this.smallStr = smallStr;
    this.largeStr = largeStr;
    this.yahtzee = yahtzee;
    this.chance = chance;
    this.yahtzeeBonusCounter = yahtzeeBonusCounter;
    this.yahtzeeBonusTotal = yahtzeeBonusTotal;
    this.grandTotalLower = grandTotalLower;
    this.grandTotal = grandTotal;
  }

  readonly aces: number | undefined;
  twos: number | undefined;
  threes: number | undefined;
  fours: number | undefined;
  fives: number | undefined;
  sixes: number | undefined;

  totalUpper: number | undefined;
  bonusUpper: boolean | undefined;
  grandTotalUpper: number | undefined;

  threeKind: number | undefined;
  fourKind: number | undefined;
  fullHouse: number | undefined;
  smallStr: number | undefined;
  largeStr: number | undefined;
  yahtzee: number | undefined;
  chance: number | undefined;

  yahtzeeBonusCounter: number | undefined;
  yahtzeeBonusTotal: number | undefined;
  grandTotalLower: number | undefined;

  grandTotal: number | undefined;
}
