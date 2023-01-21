import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomnessService {
  constructor() {}

  rollD6() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
