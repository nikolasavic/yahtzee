import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScoreData } from '../app/data/score-data';
import {
  IsScoringData,
  IsScoringDataOptional,
  isScoringDataWithDefaults,
} from '../app/data/is-scoring-data';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  constructor() {}

  private rollDataSource = new Subject<number[]>();
  rollData$ = this.rollDataSource.asObservable();

  private scoreDataSource = new Subject<ScoreData>();
  scoreData$ = this.scoreDataSource.asObservable();

  private isScoringDataSource = new Subject<IsScoringData>();
  isScoringData$ = this.isScoringDataSource.asObservable();

  updateRollData(roll: number[]) {
    this.rollDataSource.next(roll);
  }

  updateScoreData(scores: ScoreData) {
    this.scoreDataSource.next(scores);
  }

  updateIsScoringData(isScoringUpdate: IsScoringDataOptional) {
    const update: IsScoringData = isScoringDataWithDefaults(isScoringUpdate);
    this.isScoringDataSource.next(update);
  }
}
