import { TestBed } from '@angular/core/testing';
import { Subject, Subscription } from 'rxjs';

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
    'updateRoundData',
  ]);
  const updateScoreDataSpy = jasmine.createSpy();

  beforeEach(() => {
    mockGameStateService.updateScoreData = updateScoreDataSpy;
    mockGameStateService.scoreData$ = new Subject<ScoreData>();
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

  describe('score Data', () => {
    it('subscribes and saves game state', () => {
      mockGameStateService.scoreData$.next(initialGameState);

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

  describe('recordScore', () => {
    it('updates game state', () => {
      mockGameStateService.scoreData$.next(initialGameState);
      let expected = { ...initialGameState, threes: 3 };

      service.recordScore('threes', 3);

      expect(updateScoreDataSpy).toHaveBeenCalledWith(expected);
    });

    it('exit scoring phase', () => {
      service.isScoringPhase = true;

      service.recordScore('threes', 3);

      expect(service.isScoringPhase).toBe(false);
    });

    it('notify eligible categories to display score', () => {
      mockGameStateService.scoreData$.next(initialGameState);
      service.isScoringPhase = true;
      const expected: IsScoringDataOptional = {
        aces: false,
        twos: false,
        threes: false,

        threeKind: false,
        fourKind: false,
        fullHouse: false,
        smallStr: false,
        largeStr: false,
        yahtzee: false,
        chance: false,
      };

      service.recordScore('threes', 3);

      expect(service.isScoringPhase).toBe(false);
      expect(mockGameStateService.updateIsScoringData).toHaveBeenCalledWith(
        expected
      );
    });

    it('announces new round', () => {
      const expectedRound = 7;
      service.round = expectedRound;
      service.recordScore('threes', 3);

      expect(mockGameStateService.updateRoundData).toHaveBeenCalledWith(
        expectedRound
      );
    });
  });

  describe('diceRolled', () => {
    it('enter scoring phase', () => {
      expect(service.isScoringPhase).toBe(false);

      service.diceRolled();

      expect(service.isScoringPhase).toBe(true);
    });

    it('notifly eligible categories to render score button', () => {
      const scores = {
        threes: 0,
        fours: 4,
        fives: 10,
        sixes: 18,
      };
      mockGameStateService.scoreData$.next(scores);
      expect(service.isScoringPhase).toBe(false);
      const expected: IsScoringDataOptional = {
        aces: true,
        twos: true,

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

    describe('post record update', () => {
      describe('upper section is complete', () => {
        it('no bonus', () => {
          service.scores = {
            aces: 3,
            twos: 6,
            threes: 9,
            fours: 4,
            fives: 5,
          };
          const expected = {
            aces: 3,
            twos: 6,
            threes: 9,
            fours: 4,
            fives: 5,
            sixes: 12,
            bonusUpper: 0,
            totalUpper: 39,
            grandTotalUpper: 39,
          };

          service.recordScore('sixes', 12);

          expect(updateScoreDataSpy).toHaveBeenCalledWith(expected);
        });

        it('bonus', () => {
          service.scores = {
            aces: 3,
            twos: 6,
            threes: 9,
            fours: 12,
            fives: 15,
          };
          const expected = {
            aces: 3,
            twos: 6,
            threes: 9,
            fours: 12,
            fives: 15,
            sixes: 18,
            bonusUpper: 35,
            totalUpper: 63,
            grandTotalUpper: 98,
          };

          service.recordScore('sixes', 18);

          expect(updateScoreDataSpy).toHaveBeenCalledWith(expected);
        });
      });
    });
  });
});
