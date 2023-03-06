import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Subscription } from 'rxjs';

import { GameControllerService } from './game-controller.service';
import { GameStateService } from './game-state.service';
import { ScoreData } from '../app/data/score-data';

describe('GameControllerService', () => {
  let service: GameControllerService;
  let initialGameState = new ScoreData({
    fours: 4,
    fives: 5,
    sixes: 6,
  });
  let mockGameStateService = jasmine.createSpyObj('GameStateService', [
    'scoreData$',
    'updateScoreData',
  ]);
  const updateScoreDataSpy = jasmine.createSpy();

  beforeEach(() => {
    mockGameStateService.updateScoreData = updateScoreDataSpy;
    mockGameStateService.scoreData$ = new BehaviorSubject<ScoreData>(
      new ScoreData(initialGameState)
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
      let expected = new ScoreData({ ...initialGameState, threes: 3 });

      service.recordScore('threes', 3);

      expect(updateScoreDataSpy).toHaveBeenCalledOnceWith(expected);
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
});
