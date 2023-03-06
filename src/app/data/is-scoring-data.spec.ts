import { IsScoringData } from './is-scoring-data';

describe('IsScoringData', () => {
  let isScoringData: IsScoringData;

  beforeEach(() => {
    isScoringData = new IsScoringData({
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
    });
  });

  describe('defaults', () => {
    it('constructs a new isScoringData', () => {
      expect(isScoringData.aces).toBe(false);
      expect(isScoringData.twos).toBe(false);
      expect(isScoringData.threes).toBe(false);
      expect(isScoringData.fours).toBe(false);
      expect(isScoringData.fives).toBe(false);
      expect(isScoringData.sixes).toBe(false);
      expect(isScoringData.threeKind).toBe(false);
      expect(isScoringData.fourKind).toBe(false);
      expect(isScoringData.fullHouse).toBe(false);
      expect(isScoringData.smallStr).toBe(false);
      expect(isScoringData.largeStr).toBe(false);
      expect(isScoringData.yahtzee).toBe(false);
      expect(isScoringData.chance).toBe(false);
    });

    it('create a copy with different value', () => {
      let isScoring = new IsScoringData({ ...isScoringData });
      let isScoring2 = new IsScoringData({ ...isScoring, aces: true });

      expect(isScoring2.aces).toBe(true);
    });
  });
});
