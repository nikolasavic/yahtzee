import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { Category, categories } from '../app/data/category-type';
import { ScoreData } from '../app/data/score-data';
import { IsScoringDataOptional } from '../app/data/is-scoring-data';
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

    const scorableCategories = categories.filter((c) => !this.scores[c]);
    let config: IsScoringDataOptional = {};
    scorableCategories.forEach((s) => (config[s] = true));

    this.state.updateIsScoringData(config);
  }

  recordScore(category: Category, score: number) {
    let scoreToUpdate: any = { ...this.scores };
    scoreToUpdate[category] = score;

    this.state.updateScoreData(scoreToUpdate);
    this.isScoringPhase = false;
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
}
