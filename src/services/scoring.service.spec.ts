import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { ScoringService } from './scoring.service';
import { RollEvaluatorService } from './roll-evaluator.service';
import { GameControllerService } from './game-controller.service';
import { GameStateService } from './game-state.service';

describe('ScoringService', () => {
  let service: ScoringService;
  let mockRollEvaluator: any;
  let mockGameController: any;
  let mockGameStateService: any;
  let roll = [1, 2, 2, 3, 4];
  let score: number = 4;

  beforeEach(() => {
    mockRollEvaluator = jasmine.createSpyObj('RollEvaluatorService', [
      'scoreAs',
    ]);
    mockRollEvaluator.scoreAs.and.returnValue(score);

    mockGameController = jasmine.createSpyObj('GameControllerService', [
      'recordScore',
    ]);

    mockGameStateService = {
      rollData$: new BehaviorSubject<number[]>(roll),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: RollEvaluatorService, useValue: mockRollEvaluator },
        { provide: GameControllerService, useValue: mockGameController },
        { provide: GameStateService, useValue: mockGameStateService },
      ],
    });
    service = TestBed.inject(ScoringService);
  });

  describe('roll data', () => {
    it('subscribes to dice$', () => {
      expect(service.roll).toEqual(roll);
    });
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
