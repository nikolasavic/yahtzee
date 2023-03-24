import { Component, Input } from '@angular/core';

@Component({
  selector: 'yahtzee-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css'],
})
export class BonusComponent {
  @Input()
  value: number | undefined = undefined;
}
