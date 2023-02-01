import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { RollCountComponent } from './roll-count/roll-count.component';

@NgModule({
  declarations: [
    AppComponent,
    DieComponent,
    DiceTrayComponent,
    RollCountComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
