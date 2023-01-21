import { Component } from '@angular/core';
import { RandomnessService } from '../randomness.service'

@Component({
  selector: 'dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css']
})
export class DiceTrayComponent {
  constructor(private random: RandomnessService) {}

  values: number[] = [1,2,3,4,5]
}
