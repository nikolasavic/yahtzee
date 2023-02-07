import { Component, Input } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score-input-display.component.html',
  styleUrls: ['./score-input-display.component.css'],
})
export class ScoreInputDisplayComponent {
  @Input()
  score: number | null = null;
}
