import { Component } from '@angular/core';
import { GameStateService } from '../services/game-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  scores: any;
  scoreSubscription: Subscription;

  constructor(private state: GameStateService) {
    this.scoreSubscription = state.scoreSheet$.subscribe((scoreSheet) => {
      this.scores = scoreSheet;
    });
  }
}
