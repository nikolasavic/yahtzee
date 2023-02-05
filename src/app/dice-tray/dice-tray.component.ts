import { Component } from '@angular/core';
import { RandomnessService } from '../../services/randomness.service';
@Component({
  selector: 'dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css'],
})
export class DiceTrayComponent {
  constructor(private random: RandomnessService) {}

  rollRound = 0;
  paused: boolean = false;
  values: number[] = [0, 0, 0, 0, 0];
  onHold: boolean[] = [false, false, false, false, false];

  rollAll() {
    if (!this.paused) {
      this.values = this.values.map((value, index) => {
        if (this.onHold[index]) return value;
        else return this.random.rollD6();
      });
    }
  }

  toggleDie(diePosition: any) {
    const index = diePosition - 1;
    this.onHold[index] = !this.onHold[index];
  }
}
