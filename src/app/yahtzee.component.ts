import { Component, OnDestroy } from '@angular/core';
import { GameStateService } from '../services/game-state.service';
import { ScoreData } from './data/score-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.css'],
})
export class YahtzeeComponent implements OnDestroy {
  scores: ScoreData = new ScoreData({});
  scoreSubscription: Subscription;

  constructor(private state: GameStateService) {
    this.scoreSubscription = state.scoreData$.subscribe((scoreData) => {
      this.scores = scoreData;
    });
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }
}
