import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { Category } from '../app/category';
import { ScoreSheet } from '../app/score-sheet';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class GameControllerService {
  constructor(private state: GameStateService) {
    this.scoreSubscription = state.scoreSheet$.subscribe((scoreSheet) => {
      this.scores = scoreSheet;
    });
  }

  scores: ScoreSheet = new ScoreSheet({});
  scoreSubscription: Subscription;

  round: number = 1;
  isScoringPhase: boolean = false;

  recordScore(category: Category, score: number) {
    let consObj: any = { ...this.scores };
    consObj[category] = score;

    this.state.updateScoreSheet(new ScoreSheet(consObj));
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
}
