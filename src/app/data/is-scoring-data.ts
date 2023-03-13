export interface IsScoringData {
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
}

export function isScoringDataWithDefaults(
  config: IsScoringData
): IsScoringData {
  return { ...defaultIsScoringData, ...config };
}

const defaultIsScoringData: IsScoringData = {
  aces: false,
  twos: false,
  threes: false,
  fours: false,
  fives: false,
  sixes: false,

  threeKind: false,
  fourKind: false,
  fullHouse: false,
  smallStr: false,
  largeStr: false,
  yahtzee: false,
  chance: false,
};
