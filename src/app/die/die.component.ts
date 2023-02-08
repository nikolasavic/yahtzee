import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css'],
})
export class DieComponent {
  @Input()
  value = 0;

  @Input()
  hold: boolean = false;

  @Input()
  paused: boolean = false;

  @Input()
  position: number = 0;

  @Output()
  holdToggled = new EventEmitter<number>();

  emitToggleHold() {
    if (!this.paused && !(this.value == 0)) {
      this.hold = !this.hold;
      this.holdToggled.emit(this.position);
    }
  }
}
