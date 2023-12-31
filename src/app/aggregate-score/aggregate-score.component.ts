import { Component, Input } from '@angular/core';
import { Category } from '../data/category-type';
import { ScoreDisplay } from '../data/score-display-type';

@Component({
  selector: 'aggregate-score',
  templateUrl: './aggregate-score.component.html',
  styleUrls: ['./aggregate-score.component.css'],
})
export class AggregateScoreComponent {
  @Input()
  id: ScoreDisplay | undefined = undefined;

  @Input()
  value: number | undefined = undefined;
}
