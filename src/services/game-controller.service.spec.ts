import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Subscription } from 'rxjs';

import { GameControllerService } from './game-controller.service';
import { GameStateService } from './game-state.service';
import { ScoreSheet } from '../app/score-sheet';

describe('GameControllerService', () => {
  let service: GameControllerService;
  let initialGameState = new ScoreSheet({
    fours: 4,
    fives: 5,
    sixes: 6,
  });
  let gameStateServiceStub = {
    scoreSheet$: new BehaviorSubject<ScoreSheet>(
      new ScoreSheet(initialGameState)
    ),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GameStateService, useValue: gameStateServiceStub },
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
      let state = new GameStateService();
      service = new GameControllerService(state);

      expect(service.scores).toEqual(new ScoreSheet({}));
      let expectedGameState = new ScoreSheet({
        threes: 3,
      });

      service.recordScore('threes', 3);

      expect(service.scores).toEqual(expectedGameState);
    });
  });

  describe('score sheet', () => {
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
