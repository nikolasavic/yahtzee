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

  describe('rollData$ observable', () => {
    it('updateDice() is a feed for rollData$', () => {
      let result: number[] = [];
      const rolls = [3, 1, 4, 1, 5];
      service.rollData$.subscribe((roll) => {
        result = roll;
      });

      service.updateRollData(rolls);

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
      const expected: IsScoringData = {
        aces: true,
        twos: false,
        threes: false,
        fours: false,
        fives: false,
        sixes: false,

        threeKind: false,
        fourKind: false,
        fullHouse: false,
        smallStr: false,
        largeStr: true,
        yahtzee: false,
        chance: true,
      };
      const updatedValue = {
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

      service.updateIsScoringData(updatedValue);

      expect(result).toEqual(expected);
    });

    it('add missing default values to observable', () => {
      let result: any;
      const expected: IsScoringData = {
        aces: true,
        twos: false,
        threes: false,
        fours: false,
        fives: true,
        sixes: false,

        threeKind: false,
        fourKind: false,
        fullHouse: false,
        smallStr: false,
        largeStr: false,
        yahtzee: false,
        chance: true,
      };
      const updatedValue = {
        aces: true,
        chance: true,
        fives: true,
      };
      service.isScoringData$.subscribe((isScoringData) => {
        result = isScoringData;
      });

      service.updateIsScoringData(updatedValue);

      expect(result).toEqual(expected);
    });
  });

  describe('round$ observable', () => {
    it('updateRound() is a feed for round$', () => {
      let result: number = 0;
      const updatedRound = 4;
      service.round$.subscribe((round) => {
        result = round;
      });

      service.updateRoundData(updatedRound);

      expect(result).toEqual(updatedRound);
    });
  });
});
