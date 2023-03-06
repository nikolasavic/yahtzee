export class IsScoringData {
  constructor({
    aces = false,
    twos = false,
    threes = false,
    fours = false,
    fives = false,
    sixes = false,
    threeKind = false,
    fourKind = false,
    fullHouse = false,
    smallStr = false,
    largeStr = false,
    yahtzee = false,
    chance = false,
  }: {
    aces: boolean;
    twos: boolean;
    threes: boolean;
    fours: boolean;
    fives: boolean;
    sixes: boolean;
    threeKind: boolean;
    fourKind: boolean;
    fullHouse: boolean;
    smallStr: boolean;
    largeStr: boolean;
    yahtzee: boolean;
    chance: boolean;
  }) {
    this.aces = aces;
    this.twos = twos;
    this.threes = threes;
    this.fours = fours;
    this.fives = fives;
    this.sixes = sixes;
    this.threeKind = threeKind;
    this.fourKind = fourKind;
    this.fullHouse = fullHouse;
    this.smallStr = smallStr;
    this.largeStr = largeStr;
    this.yahtzee = yahtzee;
    this.chance = chance;
  }

  readonly aces: boolean;
  readonly twos: boolean;
  readonly threes: boolean;
  readonly fours: boolean;
  readonly fives: boolean;
  readonly sixes: boolean;

  readonly threeKind: boolean;
  readonly fourKind: boolean;
  readonly fullHouse: boolean;
  readonly smallStr: boolean;
  readonly largeStr: boolean;
  readonly yahtzee: boolean;
  readonly chance: boolean;
}
