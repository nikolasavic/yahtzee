import { TestBed } from '@angular/core/testing';

import { GameStateService } from './game-state.service';

describe('GameStateService', () => {
  let service: GameStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStateService);
  });

  describe('dice$ observable', () => {
    it('updateDice is source for dice$', () => {
      let result: number[] = [];
      service.dice$.subscribe((roll) => {
        result = roll;
      });

      service.updateDice([1, 2, 3, 4, 5]);

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
