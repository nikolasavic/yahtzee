import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScoreData } from '../app/data/score-data';
import { IsScoringData } from '../app/data/is-scoring-data';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  constructor() {}

  private diceSource = new Subject<number[]>();
  dice$ = this.diceSource.asObservable();

  private scoreDataSource = new Subject<ScoreData>();
  scoreData$ = this.scoreDataSource.asObservable();

  private isScoringDataSource = new Subject<IsScoringData>();
  isScoringData$ = this.isScoringDataSource.asObservable();

  updateDice(roll: number[]) {
    this.diceSource.next(roll);
  }

  updateScoreData(scores: ScoreData) {
    this.scoreDataSource.next(scores);
  }

  updateIsScoringData(isScoring: IsScoringData) {
    this.isScoringDataSource.next(isScoring);
  }
}
