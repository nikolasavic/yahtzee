export class ScoreData {
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
    bonusUpper?: number;
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
  readonly twos: number | undefined;
  readonly threes: number | undefined;
  readonly fours: number | undefined;
  readonly fives: number | undefined;
  readonly sixes: number | undefined;

  readonly totalUpper: number | undefined;
  readonly bonusUpper: number | undefined;
  readonly grandTotalUpper: number | undefined;

  readonly threeKind: number | undefined;
  readonly fourKind: number | undefined;
  readonly fullHouse: number | undefined;
  readonly smallStr: number | undefined;
  readonly largeStr: number | undefined;
  readonly yahtzee: number | undefined;
  readonly chance: number | undefined;

  readonly yahtzeeBonusCounter: number | undefined;
  readonly yahtzeeBonusTotal: number | undefined;
  readonly grandTotalLower: number | undefined;

  readonly grandTotal: number | undefined;
}
