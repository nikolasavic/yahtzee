import { Component, Input } from '@angular/core';

@Component({
  selector: 'die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css']
})
export class DieComponent {
  @Input()
  value = 0;

  @Input()
  position = 0;
}
