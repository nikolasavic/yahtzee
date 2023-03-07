export type IsScoringData = {
  readonly aces?: boolean;
  readonly twos?: boolean;
  readonly threes?: boolean;
  readonly fours?: boolean;
  readonly fives?: boolean;
  readonly sixes?: boolean;

  readonly threeKind?: boolean;
  readonly fourKind?: boolean;
  readonly fullHouse?: boolean;
  readonly smallStr?: boolean;
  readonly largeStr?: boolean;
  readonly yahtzee?: boolean;
  readonly chance?: boolean;
};
