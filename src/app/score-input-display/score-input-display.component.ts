import { Component, Input } from '@angular/core';
import { ScoringService } from '../../services/scoring.service';

@Component({
  selector: 'score',
  templateUrl: './score-input-display.component.html',
  styleUrls: ['./score-input-display.component.css'],
})
export class ScoreInputDisplayComponent {
  constructor(private scoring: ScoringService) {}

  @Input()
  id: string | undefined = undefined;

  @Input()
  score: number | undefined = undefined;

  @Input()
  isScoringPhase: boolean = false;

  recordScore() {
    this.scoring.recordScore(this.id);
  }
}
