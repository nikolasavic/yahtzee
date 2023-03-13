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

  diceRolled() {
    this.isScoringPhase = true;
  }

  recordScore(category: Category, score: number) {
    let scoreToUpdate: any = { ...this.scores };
    scoreToUpdate[category] = score;

    this.state.updateScoreData(scoreToUpdate);
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
}
