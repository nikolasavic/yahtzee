import { Component, Input } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score-input-display.component.html',
  styleUrls: ['./score-input-display.component.css'],
})
export class ScoreInputDisplayComponent {
  @Input()
  id: string | undefined = undefined;

  @Input()
  score: number | undefined = undefined;

  @Input()
  isScoringPhase: boolean = false;
}
