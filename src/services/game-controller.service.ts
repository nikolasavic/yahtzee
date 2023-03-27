import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { Category, categories } from '../app/data/category-type';
import { ScoreData } from '../app/data/score-data';
import { IsScoringDataOptional } from '../app/data/is-scoring-data';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class GameControllerService {
  constructor(private state: GameStateService) {
    this.scoreSubscription = state.scoreData$.subscribe((scoreData) => {
      this.scores = scoreData;
    });
  }

  scores: ScoreData = {};
  scoreSubscription: Subscription;

  round: number = 1;
  isScoringPhase: boolean = false;

  diceRolled() {
    this.isScoringPhase = true;

    const scorableCategories = categories.filter(
      (c) => this.scores[c] == undefined
    );

    let config: IsScoringDataOptional = {};
    scorableCategories.forEach((s) => (config[s] = true));

    this.state.updateIsScoringData(config);
  }

  recordScore(category: Category, score: number) {
    this.round++;
    let scoreToUpdate: any = { ...this.scores };
    scoreToUpdate[category] = score;

    const scorableCategories = categories.filter((c) => !this.scores[c]);
    let config: IsScoringDataOptional = {};
    scorableCategories.forEach((s) => (config[s] = false));

    this.state.updateScoreData(scoreToUpdate);
    this.state.updateIsScoringData(config);
    this.state.updateRoundData(this.round);
    this.isScoringPhase = false;

    this.postRecordUpdate(scoreToUpdate);
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }

  private postRecordUpdate(score: ScoreData) {
    const upperBonus = this.upperBonusUpdate(score);
    const grandTotal = this.grandTotalUpdate(score);

    const scoreToUpdate = {
      ...score,
      ...upperBonus,
      ...grandTotal,
    };

    this.state.updateScoreData(scoreToUpdate);
  }

  private upperBonusUpdate(score: ScoreData) {
    if (
      score.bonusUpper == undefined &&
      score.aces != undefined &&
      score.twos != undefined &&
      score.threes != undefined &&
      score.fours != undefined &&
      score.fives != undefined &&
      score.sixes != undefined
    ) {
      const preBonus =
        score.aces +
        score.twos +
        score.threes +
        score.fours +
        score.fives +
        score.sixes;

      const bonus = preBonus >= 63 ? 35 : 0;
      const total = preBonus + bonus;
      const scoreToUpdate = {
        ...score,
        bonusUpper: bonus,
        totalUpper: preBonus,
        grandTotalUpper: total,
      };

      return scoreToUpdate;
    } else {
      return {};
    }
  }

  private grandTotalUpdate(score: ScoreData) {
    if (this.round >= 14) {
      const grandTotal =
        this.undefinedNumToNumber(score.aces) +
        this.undefinedNumToNumber(score.twos) +
        this.undefinedNumToNumber(score.threes) +
        this.undefinedNumToNumber(score.fours) +
        this.undefinedNumToNumber(score.fives) +
        this.undefinedNumToNumber(score.sixes) +
        this.undefinedNumToNumber(score.bonusUpper) +
        this.undefinedNumToNumber(score.threeKind) +
        this.undefinedNumToNumber(score.fourKind) +
        this.undefinedNumToNumber(score.fullHouse) +
        this.undefinedNumToNumber(score.smallStr) +
        this.undefinedNumToNumber(score.largeStr) +
        this.undefinedNumToNumber(score.yahtzee) +
        this.undefinedNumToNumber(score.yahtzeeBonusCounter) * 100 +
        this.undefinedNumToNumber(score.chance);

      const scoreToUpdate = {
        grandTotal: grandTotal,
      };

      return scoreToUpdate;
    } else {
      return {};
    }
  }

  private undefinedNumToNumber(maybeNum: number | undefined) {
    return maybeNum == undefined ? 0 : maybeNum;
  }
}
