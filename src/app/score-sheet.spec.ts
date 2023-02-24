import { ScoreSheet } from './score-sheet';

describe('ScoreSheet', () => {
  let scoreSheet: ScoreSheet;
  beforeEach(() => {
    scoreSheet = new ScoreSheet({});
  });

  describe('defaults', () => {
    it('constructs a new scoreSheet', () => {
      const scoreSheet = new ScoreSheet({
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

      expect(scoreSheet.aces).toBe(1);
      expect(scoreSheet.twos).toBe(2);
      expect(scoreSheet.threes).toBe(3);
      expect(scoreSheet.fours).toBe(4);
      expect(scoreSheet.fives).toBe(5);
      expect(scoreSheet.sixes).toBe(6);
      expect(scoreSheet.totalUpper).toBe(7);
      expect(scoreSheet.bonusUpper).toBe(8);
      expect(scoreSheet.grandTotalUpper).toBe(9);
      expect(scoreSheet.threeKind).toBe(10);
      expect(scoreSheet.fourKind).toBe(11);
      expect(scoreSheet.fullHouse).toBe(12);
      expect(scoreSheet.smallStr).toBe(13);
      expect(scoreSheet.largeStr).toBe(14);
      expect(scoreSheet.yahtzee).toBe(15);
      expect(scoreSheet.chance).toBe(16);
      expect(scoreSheet.yahtzeeBonusCounter).toBe(17);
      expect(scoreSheet.yahtzeeBonusTotal).toBe(18);
      expect(scoreSheet.grandTotalLower).toBe(19);
      expect(scoreSheet.grandTotal).toBe(20);
    });

    it('create a copy with different value', () => {
      let score = new ScoreSheet({ aces: 3, chance: 21 });
      let score2 = new ScoreSheet({ ...score, aces: 2 });

      expect(score2.aces).toBe(2);
      expect(score2.chance).toBe(21);
      expect(score2.twos).toBe(undefined);
      expect(score2.yahtzee).toBe(undefined);
    });

    describe('upper section', () => {
      it('aces is  undefined', () => {
        expect(scoreSheet.aces).toBe(undefined);
      });

      it('twos is  undefined', () => {
        expect(scoreSheet.twos).toBe(undefined);
      });

      it('threes is  undefined', () => {
        expect(scoreSheet.threes).toBe(undefined);
      });

      it('fours is  undefined', () => {
        expect(scoreSheet.fours).toBe(undefined);
      });

      it('fives is  undefined', () => {
        expect(scoreSheet.fives).toBe(undefined);
      });

      it('sixes is  undefined', () => {
        expect(scoreSheet.sixes).toBe(undefined);
      });

      it('total of upper section is  undefined', () => {
        expect(scoreSheet.totalUpper).toBe(undefined);
      });

      it('upper section bonus is undefined', () => {
        expect(scoreSheet.bonusUpper).toBe(undefined);
      });

      it('grand total of upper section is  undefined', () => {
        expect(scoreSheet.grandTotalUpper).toBe(undefined);
      });
    });

    describe('lower section', () => {
      it('three of a kind is undefined', () => {
        expect(scoreSheet.threeKind).toBe(undefined);
      });

      it('four of a kind is undefined', () => {
        expect(scoreSheet.fourKind).toBe(undefined);
      });

      it('full house of a kind is undefined', () => {
        expect(scoreSheet.fullHouse).toBe(undefined);
      });

      it('small straight is undefined', () => {
        expect(scoreSheet.smallStr).toBe(undefined);
      });

      it('large straight is undefined', () => {
        expect(scoreSheet.largeStr).toBe(undefined);
      });

      it('yahtzee is undefined', () => {
        expect(scoreSheet.yahtzee).toBe(undefined);
      });

      it('chance is undefined', () => {
        expect(scoreSheet.chance).toBe(undefined);
      });

      it('yahtzee bonus counter is undefined', () => {
        expect(scoreSheet.yahtzeeBonusCounter).toBe(undefined);
      });

      it('yahtzee bonus total is undefined', () => {
        expect(scoreSheet.yahtzeeBonusTotal).toBe(undefined);
      });

      it('grand total of lower section is  undefined', () => {
        expect(scoreSheet.grandTotalLower).toBe(undefined);
      });

      it('grand total is  undefined', () => {
        expect(scoreSheet.grandTotal).toBe(undefined);
      });
    });
  });
});
