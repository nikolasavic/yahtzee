import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RollEvaluatorService {
  constructor() {}

  scoreAsAces(roll: number[]) {
    return this.scoreAsUpper(roll, 1);
  }

  scoreAsTwos(roll: number[]) {
    return this.scoreAsUpper(roll, 2);
  }

  scoreAsThrees(roll: number[]) {
    return this.scoreAsUpper(roll, 3);
  }

  scoreAsFours(roll: number[]) {
    return this.scoreAsUpper(roll, 4);
  }

  scoreAsFives(roll: number[]) {
    return this.scoreAsUpper(roll, 5);
  }

  scoreAsSixes(roll: number[]) {
    return this.scoreAsUpper(roll, 6);
  }

  scoreAsThreeKind(roll: number[]) {
    if (this.distict(roll).length < 4)
      return roll.reduce((total, current) => total + current);
    else return 0;
  }

  scoreAsFourKind(roll: number[]) {
    if (this.distict(roll).length < 3)
      return roll.reduce((total, current) => total + current);
    else return 0;
  }

  private scoreAsUpper(roll: number[], category: number) {
    return this.filter(roll, category).length * category;
  }

  private filter(roll: number[], value: number) {
    return roll.filter((x) => x == value);
  }

  private distict(roll: number[]) {
    return [...new Set(roll)];
  }
}
