import { TestBed } from '@angular/core/testing';

import { RandomnessService } from './randomness.service';

describe('RandomnessService', () => {
  let service: RandomnessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomnessService);
  });

  it('generate random die roll value', () => {
    const rollValue = service.rollD6();
    expect([1, 2, 3, 4, 5, 6]).toContain(rollValue);
  });
});
