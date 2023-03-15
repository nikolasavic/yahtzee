import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Subscription } from 'rxjs';

import { GameControllerService } from './game-controller.service';
import { GameStateService } from './game-state.service';
import { ScoreData } from '../app/data/score-data';
import { IsScoringDataOptional } from '../app/data/is-scoring-data';

describe('GameControllerService', () => {
  let service: GameControllerService;
  let initialGameState = {
    fours: 4,
    fives: 5,
    sixes: 6,
  };
  let mockGameStateService = jasmine.createSpyObj('GameStateService', [
    'scoreData$',
    'updateScoreData',
    'updateIsScoringData',
  ]);
  const updateScoreDataSpy = jasmine.createSpy();

  beforeEach(() => {
    mockGameStateService.updateScoreData = updateScoreDataSpy;
    mockGameStateService.scoreData$ = new BehaviorSubject<ScoreData>(
      initialGameState
    );
    TestBed.configureTestingModule({
      providers: [
        { provide: GameStateService, useValue: mockGameStateService },
      ],
    });
    service = TestBed.inject(GameControllerService);
  });

  describe('defaults', () => {
    it('start game with round 1', () => {
      expect(service.round).toBe(1);
    });

    it('start game with dice roll', () => {
      expect(service.isScoringPhase).toBe(false);
    });
  });

  describe('recordScore', () => {
    it('updates game state', () => {
      let expected = { ...initialGameState, threes: 3 };

      service.recordScore('threes', 3);

      expect(updateScoreDataSpy).toHaveBeenCalledWith(expected);
    });

    it('sets scoring phase to false', () => {
      service.isScoringPhase = true;

      service.recordScore('threes', 3);

      expect(service.isScoringPhase).toBe(false);
    });
  });

  describe('score Data', () => {
    it('subscribes and saves game state', () => {
      expect(service.scores.aces).toBe(undefined);
      expect(service.scores.sixes).toBe(6);
    });

    it('unsubscribe on ngOnDestroy', () => {
      service.scoreSubscription = new Subscription();
      spyOn(service.scoreSubscription, 'unsubscribe');

      service.ngOnDestroy();

      expect(service.scoreSubscription.unsubscribe).toHaveBeenCalledTimes(1);
    });
  });

  describe('dice rolls', () => {
    it('enter scoring phase', () => {
      expect(service.isScoringPhase).toBe(false);

      service.diceRolled();

      expect(service.isScoringPhase).toBe(true);
    });

    it('update eligible categories for scoring', () => {
      expect(service.isScoringPhase).toBe(false);
      const expected: IsScoringDataOptional = {
        aces: true,
        twos: true,
        threes: true,

        threeKind: true,
        fourKind: true,
        fullHouse: true,
        smallStr: true,
        largeStr: true,
        yahtzee: true,
        chance: true,
      };

      service.diceRolled();

      expect(service.isScoringPhase).toBe(true);
      expect(mockGameStateService.updateIsScoringData).toHaveBeenCalledWith(
        expected
      );
    });
  });
});
