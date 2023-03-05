import { TestBed } from '@angular/core/testing';

import { GameStateService } from './game-state.service';
import { ScoreSheet } from '../app/data/score-sheet';

describe('GameStateService', () => {
  let service: GameStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStateService);
  });

  describe('dice$ observable', () => {
    it('updateDice() is a feed for dice$', () => {
      let result: number[] = [];
      const rolls = [3, 1, 4, 1, 5];
      service.dice$.subscribe((roll) => {
        result = roll;
      });

      service.updateDice(rolls);

      expect(result).toEqual(rolls);
    });
  });

  describe('scoreSheet$ observable', () => {
    it('updateScoreSheet() is a feed for scoreSheet$', () => {
      let result: ScoreSheet = new ScoreSheet({});
      const scores = new ScoreSheet({
        aces: 1,
        twos: 4,
        threes: undefined,
      });
      service.scoreSheet$.subscribe((scoreSheet) => {
        result = scoreSheet;
      });

      service.updateScoreSheet(scores);

      expect(result).toEqual(scores);
    });
  });
});
