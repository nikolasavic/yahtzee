import { ScoreData } from './score-data';

describe('ScoreData', () => {
  let scoreData: ScoreData;
  beforeEach(() => {
    scoreData = new ScoreData({});
  });

  describe('defaults', () => {
    it('constructs a new scoreData', () => {
      const scoreData = new ScoreData({
        aces: 1,
        twos: 2,
        threes: 3,
        fours: 4,
        fives: 5,
        sixes: 6,
        totalUpper: 7,
        bonusUpper: 8,
        grandTotalUpper: 9,
        threeKind: 10,
        fourKind: 11,
        fullHouse: 12,
        smallStr: 13,
        largeStr: 14,
        yahtzee: 15,
        chance: 16,
        yahtzeeBonusCounter: 17,
        yahtzeeBonusTotal: 18,
        grandTotalLower: 19,
        grandTotal: 20,
      });

      expect(scoreData.aces).toBe(1);
      expect(scoreData.twos).toBe(2);
      expect(scoreData.threes).toBe(3);
      expect(scoreData.fours).toBe(4);
      expect(scoreData.fives).toBe(5);
      expect(scoreData.sixes).toBe(6);
      expect(scoreData.totalUpper).toBe(7);
      expect(scoreData.bonusUpper).toBe(8);
      expect(scoreData.grandTotalUpper).toBe(9);
      expect(scoreData.threeKind).toBe(10);
      expect(scoreData.fourKind).toBe(11);
      expect(scoreData.fullHouse).toBe(12);
      expect(scoreData.smallStr).toBe(13);
      expect(scoreData.largeStr).toBe(14);
      expect(scoreData.yahtzee).toBe(15);
      expect(scoreData.chance).toBe(16);
      expect(scoreData.yahtzeeBonusCounter).toBe(17);
      expect(scoreData.yahtzeeBonusTotal).toBe(18);
      expect(scoreData.grandTotalLower).toBe(19);
      expect(scoreData.grandTotal).toBe(20);
    });

    it('create a copy with different value', () => {
      let score = new ScoreData({ aces: 3, chance: 21 });
      let score2 = new ScoreData({ ...score, aces: 2 });

      expect(score2.aces).toBe(2);
      expect(score2.chance).toBe(21);
      expect(score2.twos).toBe(undefined);
      expect(score2.yahtzee).toBe(undefined);
    });

    describe('upper section', () => {
      it('aces is  undefined', () => {
        expect(scoreData.aces).toBe(undefined);
      });

      it('twos is  undefined', () => {
        expect(scoreData.twos).toBe(undefined);
      });

      it('threes is  undefined', () => {
        expect(scoreData.threes).toBe(undefined);
      });

      it('fours is  undefined', () => {
        expect(scoreData.fours).toBe(undefined);
      });

      it('fives is  undefined', () => {
        expect(scoreData.fives).toBe(undefined);
      });

      it('sixes is  undefined', () => {
        expect(scoreData.sixes).toBe(undefined);
      });

      it('total of upper section is  undefined', () => {
        expect(scoreData.totalUpper).toBe(undefined);
      });

      it('upper section bonus is undefined', () => {
        expect(scoreData.bonusUpper).toBe(undefined);
      });

      it('grand total of upper section is  undefined', () => {
        expect(scoreData.grandTotalUpper).toBe(undefined);
      });
    });

    describe('lower section', () => {
      it('three of a kind is undefined', () => {
        expect(scoreData.threeKind).toBe(undefined);
      });

      it('four of a kind is undefined', () => {
        expect(scoreData.fourKind).toBe(undefined);
      });

      it('full house of a kind is undefined', () => {
        expect(scoreData.fullHouse).toBe(undefined);
      });

      it('small straight is undefined', () => {
        expect(scoreData.smallStr).toBe(undefined);
      });

      it('large straight is undefined', () => {
        expect(scoreData.largeStr).toBe(undefined);
      });

      it('yahtzee is undefined', () => {
        expect(scoreData.yahtzee).toBe(undefined);
      });

      it('chance is undefined', () => {
        expect(scoreData.chance).toBe(undefined);
      });

      it('yahtzee bonus counter is undefined', () => {
        expect(scoreData.yahtzeeBonusCounter).toBe(undefined);
      });

      it('yahtzee bonus total is undefined', () => {
        expect(scoreData.yahtzeeBonusTotal).toBe(undefined);
      });

      it('grand total of lower section is  undefined', () => {
        expect(scoreData.grandTotalLower).toBe(undefined);
      });

      it('grand total is  undefined', () => {
        expect(scoreData.grandTotal).toBe(undefined);
      });
    });
  });
});
