import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'roll-count',
  templateUrl: './roll-count.component.html',
  styleUrls: ['./roll-count.component.css'],
})
export class RollCountComponent implements OnChanges {
  @Input()
  round: number = 0;

  filled: boolean[] = [false, false, false];

  ngOnChanges(changes: SimpleChanges) {
    switch (this.round) {
      case 0:
        this.filled = [false, false, false];
        break;
      case 1:
        this.filled = [true, false, false];
        break;
      case 2:
        this.filled = [true, true, false];
        break;
      case 3:
        this.filled = [true, true, true];
        break;
      default:
        this.filled = [false, false, false];
        break;
    }
  }

  setCircleType(isFilled: boolean) {
    return isFilled ? 'filled' : 'unfilled';
  }
}
