import { Injectable } from '@angular/core';

import { RollEvaluatorService } from './roll-evaluator.service';
import { Category } from '../app/category';

@Injectable({
  providedIn: 'root',
})
export class ScoringService {
  constructor(private rollEval: RollEvaluatorService) {}

  roll: number[] = [1, 2, 3, 4, 5];

  recordScore(category: Category) {
    this.rollEval.scoreAs(category, this.roll);
  }
}
