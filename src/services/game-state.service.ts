import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScoreSheet } from '../app/score-sheet';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  constructor() {}

  private diceSource = new Subject<number[]>();
  dice$ = this.diceSource.asObservable();

  private scoreSheetSource = new Subject<ScoreSheet>();
  scoreSheet$ = this.scoreSheetSource.asObservable();

  updateDice(roll: number[]) {
    this.diceSource.next(roll);
  }

  updateScoreSheet(scores: ScoreSheet) {
    this.scoreSheetSource.next(scores);
  }
}
