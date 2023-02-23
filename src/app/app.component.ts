import { Component, OnDestroy } from '@angular/core';
import { GameStateService } from '../services/game-state.service';
import { ScoreSheet } from './score-sheet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
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
