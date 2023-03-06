import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Subscription } from 'rxjs';

import { GameControllerService } from './game-controller.service';
import { GameStateService } from './game-state.service';
import { ScoreData } from '../app/data/score-data';

describe('GameControllerService Integration Test', () => {
  let service: GameControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameControllerService);
  });

  describe('recordScore', () => {
    it('updates game state', () => {
      let state = new GameStateService();
      service = new GameControllerService(state);

      expect(service.scores).toEqual(new ScoreData({}));
      let expectedGameState = new ScoreData({
        threes: 3,
      });

      service.recordScore('threes', 3);

      expect(service.scores).toEqual(expectedGameState);
    });
  });
});
