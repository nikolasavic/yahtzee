import { ScoreSheet } from './score-sheet';

describe('ScoreSheet', () => {
  let scoreSheet: ScoreSheet;
  beforeEach(() => {
    scoreSheet = new ScoreSheet();
  });

  describe('defaults', () => {
    describe('upper section', () => {
      it('aces is  null', () => {
        expect(scoreSheet.aces).toBe(null);
      });

      it('twos is  null', () => {
        expect(scoreSheet.twos).toBe(null);
      });

      it('threes is  null', () => {
        expect(scoreSheet.threes).toBe(null);
      });

      it('fours is  null', () => {
        expect(scoreSheet.fours).toBe(null);
      });

      it('fives is  null', () => {
        expect(scoreSheet.fives).toBe(null);
      });

      it('sixes is  null', () => {
        expect(scoreSheet.sixes).toBe(null);
      });

      it('total of upper section is  null', () => {
        expect(scoreSheet.totalUpper).toBe(null);
      });

      it('upper section bonus is false', () => {
        expect(scoreSheet.bonusUpper).toBe(false);
      });

      it('grand total of upper section is  null', () => {
        expect(scoreSheet.grandTotalUpper).toBe(null);
      });
    });

    describe('lower section', () => {
      it('three of a kind is null', () => {
        expect(scoreSheet.threeKind).toBe(null);
      });

      it('four of a kind is null', () => {
        expect(scoreSheet.fourKind).toBe(null);
      });

      it('full house of a kind is null', () => {
        expect(scoreSheet.fullHouse).toBe(null);
      });

      it('small straight is null', () => {
        expect(scoreSheet.smallStr).toBe(null);
      });

      it('large straight is null', () => {
        expect(scoreSheet.largeStr).toBe(null);
      });

      it('yahtzee is null', () => {
        expect(scoreSheet.yahtzee).toBe(null);
      });

      it('chance is null', () => {
        expect(scoreSheet.chance).toBe(null);
      });

      it('yahtzee bonus counter is null', () => {
        expect(scoreSheet.yahtzeeBonusCounter).toBe(null);
      });

      it('yahtzee bonus total is null', () => {
        expect(scoreSheet.yahtzeeBonusTotal).toBe(null);
      });

      it('grand total of lower section is  null', () => {
        expect(scoreSheet.grandTotalLower).toBe(null);
      });

      it('grand total is  null', () => {
        expect(scoreSheet.grandTotal).toBe(null);
      });
    });
  });
});
