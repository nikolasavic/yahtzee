import { Component } from '@angular/core';

@Component({
  selector: 'dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.css']
})
export class DiceTrayComponent {

  values: number[] = [1,2,3,4,5]
}
