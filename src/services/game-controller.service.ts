import { Injectable } from '@angular/core';

import { Category } from '../app/category';

@Injectable({
  providedIn: 'root',
})
export class GameControllerService {
  constructor() {}

  round: number = 1;

  recordScore(category: Category, score: number) {}
}
