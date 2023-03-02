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
      expect(service.scoreAs('aces', [2, 2, 3, 4, 5])).toBe(0);
      expect(service.scoreAs('aces', [1, 2, 3, 4, 5])).toBe(1);
      expect(service.scoreAs('aces', [1, 1, 1, 1, 1])).toBe(5);
    });

    it('Twos', () => {
      expect(service.scoreAs('twos', [1, 3, 3, 4, 5])).toBe(0);
      expect(service.scoreAs('twos', [1, 2, 3, 2, 5])).toBe(4);
      expect(service.scoreAs('twos', [2, 2, 2, 2, 2])).toBe(10);
    });

    it('Threes', () => {
      expect(service.scoreAs('threes', [1, 2, 4, 2, 5])).toBe(0);
      expect(service.scoreAs('threes', [1, 3, 3, 4, 5])).toBe(6);
      expect(service.scoreAs('threes', [3, 3, 3, 3, 3])).toBe(15);
    });

    it('Fours', () => {
      expect(service.scoreAs('fours', [1, 3, 3, 5, 5])).toBe(0);
      expect(service.scoreAs('fours', [1, 2, 4, 2, 4])).toBe(8);
      expect(service.scoreAs('fours', [4, 4, 4, 4, 4])).toBe(20);
    });

    it('Fives', () => {
      expect(service.scoreAs('fives', [1, 3, 6, 4, 6])).toBe(0);
      expect(service.scoreAs('fives', [1, 5, 3, 2, 5])).toBe(10);
      expect(service.scoreAs('fives', [5, 5, 5, 5, 5])).toBe(25);
    });

    it('Sixes', () => {
      expect(service.scoreAs('sixes', [1, 3, 3, 4, 5])).toBe(0);
      expect(service.scoreAs('sixes', [6, 2, 3, 2, 6])).toBe(12);
      expect(service.scoreAs('sixes', [6, 6, 6, 6, 6])).toBe(30);
    });
  });

  describe('Lower Section', () => {
    describe('Three of a kind', () => {
      it('3 distict values', () => {
        expect(service.scoreAs('threeKind', [1, 2, 3, 3, 3])).toBe(12);
        expect(service.scoreAs('threeKind', [5, 2, 5, 5, 6])).toBe(23);
        expect(service.scoreAs('threeKind', [3, 4, 6, 4, 4])).toBe(21);
      });

      it('2 distict values', () => {
        expect(service.scoreAs('threeKind', [2, 2, 3, 3, 3])).toBe(13);
        expect(service.scoreAs('threeKind', [5, 2, 5, 5, 2])).toBe(19);
        expect(service.scoreAs('threeKind', [6, 4, 6, 4, 4])).toBe(24);
      });

      it('1 distict values', () => {
        expect(service.scoreAs('threeKind', [3, 3, 3, 3, 3])).toBe(15);
        expect(service.scoreAs('threeKind', [5, 5, 5, 5, 5])).toBe(25);
        expect(service.scoreAs('threeKind', [4, 4, 4, 4, 4])).toBe(20);
      });
    });

    it('Not a three of a kind', () => {
      expect(service.scoreAs('fullHouse', [2, 3, 5, 3, 2])).toBe(0);
      expect(service.scoreAs('fullHouse', [5, 2, 2, 1, 5])).toBe(0);
      expect(service.scoreAs('fullHouse', [3, 5, 2, 6, 2])).toBe(0);
    });
  });

  describe('Four of a kind', () => {
    it('2 distict values', () => {
      expect(service.scoreAs('fourKind', [3, 2, 3, 3, 3])).toBe(14);
      expect(service.scoreAs('fourKind', [5, 2, 5, 5, 5])).toBe(22);
      expect(service.scoreAs('fourKind', [6, 4, 4, 4, 4])).toBe(22);
    });

    it('1 distict values', () => {
      expect(service.scoreAs('fourKind', [4, 4, 4, 4, 4])).toBe(20);
      expect(service.scoreAs('fourKind', [1, 1, 1, 1, 1])).toBe(5);
      expect(service.scoreAs('fourKind', [2, 2, 2, 2, 2])).toBe(10);
    });

    it('Not a four of a kind', () => {
      expect(service.scoreAs('fullHouse', [1, 3, 5, 2, 2])).toBe(0);
      expect(service.scoreAs('fullHouse', [4, 2, 2, 3, 5])).toBe(0);
      expect(service.scoreAs('fullHouse', [1, 5, 2, 6, 1])).toBe(0);
    });
  });

  describe('Full House', () => {
    it('2 distict values', () => {
      expect(service.scoreAs('fullHouse', [2, 2, 3, 3, 3])).toBe(25);
      expect(service.scoreAs('fullHouse', [5, 2, 5, 5, 2])).toBe(25);
      expect(service.scoreAs('fullHouse', [6, 4, 4, 4, 6])).toBe(25);
    });

    it('1 distict values', () => {
      expect(service.scoreAs('fullHouse', [2, 2, 2, 2, 2])).toBe(25);
      expect(service.scoreAs('fullHouse', [5, 5, 5, 5, 5])).toBe(25);
      expect(service.scoreAs('fullHouse', [3, 3, 3, 3, 3])).toBe(25);
    });

    it('Not a full house', () => {
      expect(service.scoreAs('fullHouse', [2, 3, 5, 1, 2])).toBe(0);
      expect(service.scoreAs('fullHouse', [5, 2, 2, 3, 5])).toBe(0);
      expect(service.scoreAs('fullHouse', [1, 5, 5, 4, 1])).toBe(0);
    });
  });

  describe('Small straight', () => {
    it('4 consecutive', () => {
      expect(service.scoreAs('smallStr', [1, 2, 3, 4, 2])).toBe(30);
      expect(service.scoreAs('smallStr', [2, 2, 3, 4, 5])).toBe(30);
      expect(service.scoreAs('smallStr', [3, 4, 5, 6, 1])).toBe(30);
    });

    it('5 consecutive', () => {
      expect(service.scoreAs('smallStr', [1, 2, 3, 4, 5])).toBe(30);
      expect(service.scoreAs('smallStr', [2, 3, 4, 5, 6])).toBe(30);
    });

    it('Not a small straight', () => {
      expect(service.scoreAs('smallStr', [2, 3, 5, 1, 2])).toBe(0);
      expect(service.scoreAs('smallStr', [5, 2, 2, 3, 5])).toBe(0);
      expect(service.scoreAs('smallStr', [1, 5, 5, 4, 1])).toBe(0);
    });
  });

  describe('Large straight', () => {
    it('5 consecutive', () => {
      expect(service.scoreAs('largeStr', [1, 2, 3, 4, 5])).toBe(40);
      expect(service.scoreAs('largeStr', [2, 3, 4, 5, 6])).toBe(40);
    });

    it('Not a large straight', () => {
      expect(service.scoreAs('largeStr', [2, 3, 5, 1, 2])).toBe(0);
      expect(service.scoreAs('largeStr', [5, 2, 2, 3, 5])).toBe(0);
      expect(service.scoreAs('largeStr', [1, 5, 5, 4, 1])).toBe(0);
    });
  });

  describe('Yahtzee', () => {
    it('Is yahtzee', () => {
      expect(service.scoreAs('yahtzee', [1, 1, 1, 1, 1])).toBe(50);
      expect(service.scoreAs('yahtzee', [2, 2, 2, 2, 2])).toBe(50);
      expect(service.scoreAs('yahtzee', [3, 3, 3, 3, 3])).toBe(50);
      expect(service.scoreAs('yahtzee', [4, 4, 4, 4, 4])).toBe(50);
      expect(service.scoreAs('yahtzee', [5, 5, 5, 5, 5])).toBe(50);
      expect(service.scoreAs('yahtzee', [6, 6, 6, 6, 6])).toBe(50);
    });

    it('Not a yahtzee', () => {
      expect(service.scoreAs('largeStr', [2, 3, 5, 1, 2])).toBe(0);
      expect(service.scoreAs('largeStr', [5, 2, 2, 3, 5])).toBe(0);
      expect(service.scoreAs('largeStr', [1, 5, 5, 4, 1])).toBe(0);
    });
  });

  it('Chance', () => {
    expect(service.scoreAs('chance', [2, 3, 5, 1, 2])).toBe(13);
    expect(service.scoreAs('chance', [5, 2, 2, 3, 5])).toBe(17);
    expect(service.scoreAs('chance', [1, 5, 5, 4, 1])).toBe(16);
    expect(service.scoreAs('chance', [1, 2, 3, 4, 5])).toBe(15);
    expect(service.scoreAs('chance', [2, 3, 4, 5, 6])).toBe(20);
  });
});
