import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  constructor() {}

  private diceSource = new Subject<number[]>();
  dice$ = this.diceSource.asObservable();

  private scoreSheetSource = new Subject<object>();
  scoreSheet$ = this.scoreSheetSource.asObservable();

  updateDice(roll: number[]) {
    this.diceSource.next(roll);
  }

  updateScoreSheet(scores: object) {
    this.scoreSheetSource.next(scores);
  }
}
