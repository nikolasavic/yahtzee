import { TestBed } from '@angular/core/testing';

import { GameStateService } from './game-state.service';
import { ScoreData } from '../app/data/score-data';
import { IsScoringData } from '../app/data/is-scoring-data';

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
      let result: ScoreData = {};
      const scores = {
        aces: 1,
        twos: 4,
        threes: undefined,
      };
      service.scoreData$.subscribe((scoreData) => {
        result = scoreData;
      });

      service.updateScoreData(scores);

      expect(result).toEqual(scores);
    });
  });

  describe('isScoringData$ observable', () => {
    it('updateIsScoringData() is a feed for isScoringData$', () => {
      let result: any;
      const isScoring = {
        aces: true,
        twos: false,
        threes: false,
        fours: false,
        largeStr: true,
        yahtzee: false,
        chance: true,
      };
      service.isScoringData$.subscribe((isScoringData) => {
        result = isScoringData;
      });

      service.updateIsScoringData(isScoring);

      expect(result).toEqual(isScoring);
    });
  });
});
