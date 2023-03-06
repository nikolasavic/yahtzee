import { TestBed } from '@angular/core/testing';

import { GameStateService } from './game-state.service';
import { ScoreData } from '../app/data/score-data';

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

  describe('scoreData$ observable', () => {
    it('updateScoreData() is a feed for scoreData$', () => {
      let result: ScoreData = new ScoreData({});
      const scores = new ScoreData({
        aces: 1,
        twos: 4,
        threes: undefined,
      });
      service.scoreData$.subscribe((scoreData) => {
        result = scoreData;
      });

      service.updateScoreData(scores);

      expect(result).toEqual(scores);
    });
  });
});
