import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { RollEvaluatorService } from './roll-evaluator.service';
import { GameControllerService } from './game-controller.service';
import { GameStateService } from './game-state.service';
import { Category } from '../app/data/category-type';

@Injectable({
  providedIn: 'root',
})
export class ScoringService {
  constructor(
    private rollEval: RollEvaluatorService,
    private ctrl: GameControllerService,
    private state: GameStateService
  ) {
    this.rollSubscription = state.rollData$.subscribe((dice) => {
      this.roll = dice;
    });
  }

  rollSubscription: Subscription;
  roll: number[] = [];

  recordScore(category: Category) {
    const score = this.rollEval.scoreAs(category, this.roll);
    this.ctrl.recordScore(category, score);
  }
}
