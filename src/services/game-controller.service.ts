import { Injectable } from '@angular/core';

import { Category } from '../app/category';

@Injectable({
  providedIn: 'root',
})
export class GameControllerService {
  constructor() {}

  recordScore(category: Category, score: number) {}
}
