export interface ScoreData {
  readonly aces?: number | undefined;
  readonly twos?: number | undefined;
  readonly threes?: number | undefined;
  readonly fours?: number | undefined;
  readonly fives?: number | undefined;
  readonly sixes?: number | undefined;

  readonly totalUpper?: number | undefined;
  readonly bonusUpper?: number | undefined;
  readonly grandTotalUpper?: number | undefined;

  readonly threeKind?: number | undefined;
  readonly fourKind?: number | undefined;
  readonly fullHouse?: number | undefined;
  readonly smallStr?: number | undefined;
  readonly largeStr?: number | undefined;
  readonly yahtzee?: number | undefined;
  readonly chance?: number | undefined;

  readonly yahtzeeBonusCounter?: number | undefined;
  readonly yahtzeeBonusTotal?: number | undefined;
  readonly grandTotalLower?: number | undefined;

  readonly grandTotal?: number | undefined;
}
