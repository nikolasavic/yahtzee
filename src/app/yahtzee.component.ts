import { Component, OnDestroy } from '@angular/core';
import { GameStateService } from '../services/game-state.service';
import { ScoreData } from './data/score-data';
import {
  IsScoringData,
  isScoringDataWithDefaults,
} from './data/is-scoring-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.css'],
})
export class YahtzeeComponent implements OnDestroy {
  scores: ScoreData = {};
  scoreSubscription: Subscription;
  isScoring: IsScoringData = isScoringDataWithDefaults({});
  isScoringSubscription: Subscription;

  constructor(private state: GameStateService) {
    this.scoreSubscription = state.scoreData$.subscribe((scoreData) => {
      this.scores = scoreData;
    });

    this.isScoringSubscription = state.isScoringData$.subscribe(
      (isScoringData) => {
        this.isScoring = isScoringData;
      }
    );
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
    this.isScoringSubscription.unsubscribe();
  }
}
