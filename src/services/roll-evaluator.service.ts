import { Injectable } from '@angular/core';

import { Category } from '../app/category';

@Injectable({
  providedIn: 'root',
})
export class RollEvaluatorService {
  constructor() {}

  scoreAs(category: Category, roll: number[]) {
    switch (category) {
      case 'aces':
        return this.scoreAsAces(roll);
        break;
      case 'twos':
        return this.scoreAsTwos(roll);
        break;
      case 'threes':
        return this.scoreAsThrees(roll);
        break;
      case 'fours':
        return this.scoreAsFours(roll);
        break;
      case 'fives':
        return this.scoreAsFives(roll);
        break;
      case 'sixes':
        return this.scoreAsSixes(roll);
        break;
      case 'threeKind':
        return this.scoreAsThreeKind(roll);
        break;
      case 'fourKind':
        return this.scoreAsFourKind(roll);
        break;
      case 'fullHouse':
        return this.scoreAsFullHouse(roll);
        break;
      case 'smallStr':
        return this.scoreAsSmallStr(roll);
        break;
      case 'largeStr':
        return this.scoreAsLargeStr(roll);
        break;
      case 'yahtzee':
        return this.scoreAsYahtzee(roll);
        break;
      case 'chance':
        return this.scoreAsChance(roll);
        break;
    }
  }

  private scoreAsAces(roll: number[]) {
    return this.scoreAsUpper(roll, 1);
  }

  private scoreAsTwos(roll: number[]) {
    return this.scoreAsUpper(roll, 2);
  }

  private scoreAsThrees(roll: number[]) {
    return this.scoreAsUpper(roll, 3);
  }

  private scoreAsFours(roll: number[]) {
    return this.scoreAsUpper(roll, 4);
  }

  private scoreAsFives(roll: number[]) {
    return this.scoreAsUpper(roll, 5);
  }

  private scoreAsSixes(roll: number[]) {
    return this.scoreAsUpper(roll, 6);
  }

  private scoreAsThreeKind(roll: number[]) {
    if (this.distict(roll).length < 4)
      return roll.reduce((total, current) => total + current);
    else return 0;
  }

  private scoreAsFourKind(roll: number[]) {
    if (this.distict(roll).length < 3)
      return roll.reduce((total, current) => total + current);
    else return 0;
  }

  private scoreAsFullHouse(roll: number[]) {
    if (this.distict(roll).length < 3) return 25;
    else return 0;
  }

  private scoreAsSmallStr(roll: number[]) {
    if (this.contains(roll, [1, 2, 3, 4])) return 30;
    else if (this.contains(roll, [2, 3, 4, 5])) return 30;
    else if (this.contains(roll, [3, 4, 5, 6])) return 30;
    else return 0;
  }

  private scoreAsLargeStr(roll: number[]) {
    if (this.contains(roll, [1, 2, 3, 4, 5])) return 40;
    else if (this.contains(roll, [2, 3, 4, 5, 6])) return 40;
    else return 0;
  }

  private scoreAsYahtzee(roll: number[]) {
    if (this.distict(roll).length == 1) return 50;
    else return 0;
  }

  private scoreAsChance(roll: number[]) {
    return roll.reduce((total, current) => total + current);
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
