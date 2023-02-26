import { TestBed } from '@angular/core/testing';

import { RollEvaluatorService } from './roll-evaluator.service';

describe('RollEvaluatorService', () => {
  let service: RollEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollEvaluatorService);
  });

  describe('Upper Section', () => {
    it('Aces', () => {
      expect(service.scoreAsAces([2, 2, 3, 4, 5])).toBe(0);
      expect(service.scoreAsAces([1, 2, 3, 4, 5])).toBe(1);
      expect(service.scoreAsAces([1, 1, 1, 1, 1])).toBe(5);
    });

    it('Twos', () => {
      expect(service.scoreAsTwos([1, 3, 3, 4, 5])).toBe(0);
      expect(service.scoreAsTwos([1, 2, 3, 2, 5])).toBe(4);
      expect(service.scoreAsTwos([2, 2, 2, 2, 2])).toBe(10);
    });

    it('Threes', () => {
      expect(service.scoreAsThrees([1, 2, 4, 2, 5])).toBe(0);
      expect(service.scoreAsThrees([1, 3, 3, 4, 5])).toBe(6);
      expect(service.scoreAsThrees([3, 3, 3, 3, 3])).toBe(15);
    });

    it('Fours', () => {
      expect(service.scoreAsFours([1, 3, 3, 5, 5])).toBe(0);
      expect(service.scoreAsFours([1, 2, 4, 2, 4])).toBe(8);
      expect(service.scoreAsFours([4, 4, 4, 4, 4])).toBe(20);
    });

    it('Fives', () => {
      expect(service.scoreAsFives([1, 3, 6, 4, 6])).toBe(0);
      expect(service.scoreAsFives([1, 5, 3, 2, 5])).toBe(10);
      expect(service.scoreAsFives([5, 5, 5, 5, 5])).toBe(25);
    });

    it('Sixes', () => {
      expect(service.scoreAsSixes([1, 3, 3, 4, 5])).toBe(0);
      expect(service.scoreAsSixes([6, 2, 3, 2, 6])).toBe(12);
      expect(service.scoreAsSixes([6, 6, 6, 6, 6])).toBe(30);
    });
  });

  describe('Lower Section', () => {
    describe('Three of a kind', () => {
      it('3 distict values', () => {
        expect(service.scoreAsThreeKind([1, 2, 3, 3, 3])).toBe(12);
        expect(service.scoreAsThreeKind([5, 2, 5, 5, 6])).toBe(23);
        expect(service.scoreAsThreeKind([3, 4, 6, 4, 4])).toBe(21);
      });

      it('2 distict values', () => {
        expect(service.scoreAsThreeKind([2, 2, 3, 3, 3])).toBe(13);
        expect(service.scoreAsThreeKind([5, 2, 5, 5, 2])).toBe(19);
        expect(service.scoreAsThreeKind([6, 4, 6, 4, 4])).toBe(24);
      });

      it('1 distict values', () => {
        expect(service.scoreAsThreeKind([3, 3, 3, 3, 3])).toBe(15);
        expect(service.scoreAsThreeKind([5, 5, 5, 5, 5])).toBe(25);
        expect(service.scoreAsThreeKind([4, 4, 4, 4, 4])).toBe(20);
      });
    });
  });

  describe('Four of a kind', () => {
    it('2 distict values', () => {
      expect(service.scoreAsFourKind([3, 2, 3, 3, 3])).toBe(14);
      expect(service.scoreAsFourKind([5, 2, 5, 5, 5])).toBe(22);
      expect(service.scoreAsFourKind([6, 4, 4, 4, 4])).toBe(22);
    });

    it('1 distict values', () => {
      expect(service.scoreAsFourKind([4, 4, 4, 4, 4])).toBe(20);
      expect(service.scoreAsFourKind([1, 1, 1, 1, 1])).toBe(5);
      expect(service.scoreAsFourKind([2, 2, 2, 2, 2])).toBe(10);
    });
  });

  describe('Full House', () => {
    it('2 distict values', () => {
      expect(service.scoreAsFullHouse([2, 2, 3, 3, 3])).toBe(25);
      expect(service.scoreAsFullHouse([5, 2, 5, 5, 2])).toBe(25);
      expect(service.scoreAsFullHouse([6, 4, 4, 4, 6])).toBe(25);
    });

    it('1 distict values', () => {
      expect(service.scoreAsFullHouse([2, 2, 2, 2, 2])).toBe(25);
      expect(service.scoreAsFullHouse([5, 5, 5, 5, 5])).toBe(25);
      expect(service.scoreAsFullHouse([3, 3, 3, 3, 3])).toBe(25);
    });

    it('Not a full house', () => {
      expect(service.scoreAsFullHouse([2, 3, 5, 1, 2])).toBe(0);
      expect(service.scoreAsFullHouse([5, 2, 2, 3, 5])).toBe(0);
      expect(service.scoreAsFullHouse([1, 5, 5, 4, 1])).toBe(0);
    });
  });
});
