import { IsScoringData, isScoringDataWithDefaults } from './is-scoring-data';

describe('IsScoringData', () => {
  it('isScoringDataWithDefaults is all false', () => {
    let isScoring: IsScoringData = isScoringDataWithDefaults({});

    expect(isScoring.aces).toBe(false);
    expect(isScoring.twos).toBe(false);
    expect(isScoring.threes).toBe(false);
    expect(isScoring.fours).toBe(false);
    expect(isScoring.fives).toBe(false);
    expect(isScoring.sixes).toBe(false);

    expect(isScoring.threeKind).toBe(false);
    expect(isScoring.fourKind).toBe(false);
    expect(isScoring.fullHouse).toBe(false);
    expect(isScoring.smallStr).toBe(false);
    expect(isScoring.largeStr).toBe(false);
    expect(isScoring.yahtzee).toBe(false);
    expect(isScoring.chance).toBe(false);
  });

  it('isScoringDataWithDefaults does not override parameters', () => {
    let isScoring: IsScoringData = isScoringDataWithDefaults({
      aces: true,
      chance: true,
    });

    expect(isScoring.aces).toBe(true);
    expect(isScoring.twos).toBe(false);
    expect(isScoring.threes).toBe(false);
    expect(isScoring.fours).toBe(false);
    expect(isScoring.fives).toBe(false);
    expect(isScoring.sixes).toBe(false);

    expect(isScoring.threeKind).toBe(false);
    expect(isScoring.fourKind).toBe(false);
    expect(isScoring.fullHouse).toBe(false);
    expect(isScoring.smallStr).toBe(false);
    expect(isScoring.largeStr).toBe(false);
    expect(isScoring.yahtzee).toBe(false);
    expect(isScoring.chance).toBe(true);
  });
});
