import { Component, Input } from '@angular/core';
import { ScoringService } from '../../services/scoring.service';
import { Category } from '../data/category-type';
import { ScoreDisplay } from '../data/score-display';

@Component({
  selector: 'score',
  templateUrl: './score-input-display.component.html',
  styleUrls: ['./score-input-display.component.css'],
})
export class ScoreInputDisplayComponent {
  constructor(private scoring: ScoringService) {}

  @Input()
  id: Category | ScoreDisplay | undefined = undefined;

  @Input()
  score: number | undefined = undefined;

  @Input()
  isScoringPhase: boolean = false;

  recordScore() {
    this.scoring.recordScore(this.id as Category);
  }
}
