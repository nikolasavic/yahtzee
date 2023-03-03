import { TestBed } from '@angular/core/testing';

import { ScoringService } from './scoring.service';
import { RollEvaluatorService } from './roll-evaluator.service';
import { GameControllerService } from './game-controller.service';

describe('ScoringService', () => {
  let service: ScoringService;
  let mockRollEvaluator: any;
  let mockGameController: any;
  let score: number = 4;

  beforeEach(() => {
    mockRollEvaluator = jasmine.createSpyObj('RollEvaluatorService', [
      'scoreAs',
    ]);
    mockRollEvaluator.scoreAs.and.returnValue(score);

    mockGameController = jasmine.createSpyObj('GameControllerService', [
      'recordScore',
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: RollEvaluatorService, useValue: mockRollEvaluator },
        { provide: GameControllerService, useValue: mockGameController },
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
      const category = 'aces';
      const roll = [1, 2, 1, 1, 1];
      service.roll = roll;

      service.recordScore(category);

      expect(mockGameController.recordScore).toHaveBeenCalledOnceWith(
        category,
        score
      );
    });
  });
});
