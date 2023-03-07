import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { Category } from '../app/data/category-type';
import { ScoreData } from '../app/data/score-data';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class GameControllerService {
  constructor(private state: GameStateService) {
    this.scoreSubscription = state.scoreData$.subscribe((scoreData) => {
      this.scores = scoreData;
    });
  }

  scores: ScoreData = {};
  scoreSubscription: Subscription;

  round: number = 1;
  isScoringPhase: boolean = false;

  recordScore(category: Category, score: number) {
    let consObj: any = { ...this.scores };
    consObj[category] = score;

    this.state.updateScoreData(consObj);
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
}
