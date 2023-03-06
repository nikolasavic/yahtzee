import { Injectable } from '@angular/core';

import { RollEvaluatorService } from './roll-evaluator.service';
import { GameControllerService } from './game-controller.service';
import { Category } from '../app/data/category-type';

@Injectable({
  providedIn: 'root',
})
export class ScoringService {
  constructor(
    private rollEval: RollEvaluatorService,
    private ctrl: GameControllerService
  ) {}

  roll: number[] = [1, 2, 3, 4, 5];

  recordScore(category: Category) {
    const score = this.rollEval.scoreAs(category, this.roll);
    this.ctrl.recordScore(category, score);
  }
}
