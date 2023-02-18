import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { RollCountComponent } from './roll-count/roll-count.component';
import { ScoreInputDisplayComponent } from './score-input-display/score-input-display.component';
import { GameStateService } from '../services/game-state.service';

import { BehaviorSubject } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeEl: any;
  let gameStateServiceStub = {
    scoreSheet$: new BehaviorSubject<object>({
      aces: 1,
      twos: 4,
      threes: 9,
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DieComponent,
        DiceTrayComponent,
        RollCountComponent,
        ScoreInputDisplayComponent,
      ],
      providers: [
        { provide: GameStateService, useValue: gameStateServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('renders', () => {
    it('title', () => {
      expect(nativeEl.querySelector('.title').textContent).toContain(
        'Yahtzee!'
      );
    });

    it('dice tray', () => {
      expect(nativeEl.querySelector('button.roll-all').textContent).toContain(
        'Roll All'
      );
      expect(nativeEl.querySelectorAll('div.dice-tray die img').length).toBe(5);
    });

    it('roll indicators', () => {
      expect(nativeEl.querySelector('roll-count img').src).toContain(
        'unfilledCircle.svg'
      );
    });
  });

  describe('score sheet', () => {
    it('aces', () => {
      expect(component.scores['aces']).toBe(1);
    });
  });
});
