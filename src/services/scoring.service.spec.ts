import { TestBed } from '@angular/core/testing';

import { ScoringService } from './scoring.service';
import { RollEvaluatorService } from './roll-evaluator.service';

describe('ScoringService', () => {
  let service: ScoringService;
  let mockRollEvaluator: any;

  beforeEach(() => {
    mockRollEvaluator = jasmine.createSpyObj('RollEvaluatorService', [
      'scoreAs',
    ]);
    mockRollEvaluator.scoreAs.and.returnValue(4);

    TestBed.configureTestingModule({
      providers: [
        { provide: RollEvaluatorService, useValue: mockRollEvaluator },
      ],
    });
    service = TestBed.inject(ScoringService);
  });

  describe('recordScore', () => {
    it('evaluates current dice roll', () => {
      const category = 'aces';
      const roll = [1, 1, 1, 1, 1];
      service.roll = roll;

      service.recordScore(category);

      expect(mockRollEvaluator.scoreAs).toHaveBeenCalledOnceWith(
        category,
        roll
      );
    });

    it('records score with game controller', () => {
      // next
    });
  });
});
