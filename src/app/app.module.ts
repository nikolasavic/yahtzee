import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { YahtzeeComponent } from './yahtzee.component';
import { DieComponent } from './die/die.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { RollCountComponent } from './roll-count/roll-count.component';
import { ScoreInputDisplayComponent } from './score-input-display/score-input-display.component';
import { AggregateScoreComponent } from './aggregate-score/aggregate-score.component';
import { BonusComponent } from './bonus/bonus.component';

@NgModule({
  declarations: [
    YahtzeeComponent,
    DieComponent,
    DiceTrayComponent,
    RollCountComponent,
    ScoreInputDisplayComponent,
    AggregateScoreComponent,
    BonusComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [YahtzeeComponent],
})
export class AppModule {}
