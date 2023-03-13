import { Component } from '@angular/core';
import { RandomnessService } from '../../services/randomness.service';
import { GameControllerService } from '../../services/game-controller.service';
@Component({
  selector: 'dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css'],
})
export class DiceTrayComponent {
  constructor(
    private random: RandomnessService,
    private ctrl: GameControllerService
  ) {}

  rollRound = 0;
  paused: boolean = false;
  values: number[] = [0, 0, 0, 0, 0];
  onHold: boolean[] = [false, false, false, false, false];

  rollAll() {
    if (!this.paused) {
      this.rollRound++;

      this.values = this.values.map((value, index) => {
        if (this.onHold[index]) return value;
        else return this.random.rollD6();
      });

      this.ctrl.diceRolled();

      if (this.rollRound >= 3) {
        this.onHold = [false, false, false, false, false];
        this.paused = true;
      }
    }
  }

  toggleDie(diePosition: any) {
    const index = diePosition - 1;
    this.onHold[index] = !this.onHold[index];
  }

  reset() {
    this.rollRound = 0;
    this.paused = false;
    this.values = [0, 0, 0, 0, 0];
    this.onHold = [false, false, false, false, false];
  }
}
