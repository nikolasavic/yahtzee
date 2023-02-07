import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { RollCountComponent } from './roll-count/roll-count.component';
import { ScoreInputDisplayComponent } from './score-input-display/score-input-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DieComponent,
    DiceTrayComponent,
    RollCountComponent,
    ScoreInputDisplayComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
