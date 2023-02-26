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
});
