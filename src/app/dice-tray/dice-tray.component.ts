import { Component } from '@angular/core';
import { RandomnessService } from '../randomness.service';

@Component({
  selector: 'dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css'],
})
export class DiceTrayComponent {
  constructor(private random: RandomnessService) {}

  paused: boolean = false;
  values: number[] = [1, 2, 3, 4, 5];
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
