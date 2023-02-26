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

  scoreAsFullHouse(roll: number[]) {
    if (this.distict(roll).length < 3) return 25;
    else return 0;
  }

  scoreAsSmallStr(roll: number[]) {
    if (this.contains(roll, [1, 2, 3, 4])) return 30;
    else if (this.contains(roll, [2, 3, 4, 5])) return 30;
    else if (this.contains(roll, [3, 4, 5, 6])) return 30;
    else return 0;
  }

  scoreAsLargeStr(roll: number[]) {
    if (this.contains(roll, [1, 2, 3, 4, 5])) return 40;
    else if (this.contains(roll, [2, 3, 4, 5, 6])) return 40;
    else return 0;
  }

  scoreAsYahtzee(roll: number[]) {
    if (this.distict(roll).length == 1) return 50;
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

  private contains(roll: number[], values: number[]) {
    return values.every((x) => roll.includes(x));
  }
}
