import { Component, OnDestroy } from '@angular/core';
import { GameStateService } from '../services/game-state.service';
import { ScoreSheet } from './data/score-sheet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.css'],
})
export class YahtzeeComponent implements OnDestroy {
  scores: ScoreSheet = new ScoreSheet({});
  scoreSubscription: Subscription;

  constructor(private state: GameStateService) {
    this.scoreSubscription = state.scoreSheet$.subscribe((scoreSheet) => {
      this.scores = scoreSheet;
    });
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
}
