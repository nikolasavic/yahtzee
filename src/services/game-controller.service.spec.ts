import { TestBed } from '@angular/core/testing';

import { GameControllerService } from './game-controller.service';

describe('GameControllerService', () => {
  let service: GameControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameControllerService);
  });

  describe('defaults', () => {
    it('start game with round 1', () => {
      expect(service.round).toBe(1);
    });
  });
});
