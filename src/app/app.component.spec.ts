import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { RollCountComponent } from './roll-count/roll-count.component';
import { ScoreInputDisplayComponent } from './score-input-display/score-input-display.component';
import { GameStateService } from '../services/game-state.service';
import { ScoreSheet } from './score-sheet';

import { BehaviorSubject, Subscription } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let nativeEl: any;
  let gameStateServiceStub = {
    scoreSheet$: new BehaviorSubject<ScoreSheet>(
      new ScoreSheet({
        aces: 1,
        twos: 2,
        threes: 3,
        fours: 4,
        fives: 5,
        sixes: 6,
        totalUpper: 7,
        bonusUpper: true,
        grandTotalUpper: 8,
        threeKind: 9,
        fourKind: 10,
        fullHouse: 11,
        smallStr: 12,
        largeStr: 13,
        yahtzee: 14,
        chance: 15,
        yahtzeeBonusCounter: 16,
        yahtzeeBonusTotal: 17,
        grandTotalLower: 18,
        grandTotal: 19,
      })
    ),
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
    it('unsubscribe on ngOnDestroy', () => {
      component.scoreSubscription = new Subscription();
      spyOn(component.scoreSubscription, 'unsubscribe');

      component.ngOnDestroy();

      expect(component.scoreSubscription.unsubscribe).toHaveBeenCalledTimes(1);
    });

    describe('renders', () => {
      it('aces', () => {
        expect(nativeEl.querySelector('#aces').textContent).toBe('1');
      });

      it('twos', () => {
        expect(nativeEl.querySelector('#twos').textContent).toBe('2');
      });

      it('threes', () => {
        expect(nativeEl.querySelector('#threes').textContent).toBe('3');
      });

      it('fours', () => {
        expect(nativeEl.querySelector('#fours').textContent).toBe('4');
      });

      it('fives', () => {
        expect(nativeEl.querySelector('#fives').textContent).toBe('5');
      });

      it('sixes', () => {
        expect(nativeEl.querySelector('#sixes').textContent).toBe('6');
      });

      it('totalUpper', () => {
        expect(nativeEl.querySelector('#totalUpper').textContent).toBe('7');
      });

      it('grandTotalUpper', () => {
        expect(nativeEl.querySelector('#grandTotalUpper').textContent).toBe(
          '8'
        );
      });

      it('threeKind', () => {
        expect(nativeEl.querySelector('#threeKind').textContent).toBe('9');
      });

      it('fourKind', () => {
        expect(nativeEl.querySelector('#fourKind').textContent).toBe('10');
      });

      it('fullHouse', () => {
        expect(nativeEl.querySelector('#fullHouse').textContent).toBe('11');
      });

      it('smallStr', () => {
        expect(nativeEl.querySelector('#smallStr').textContent).toBe('12');
      });

      it('largeStr', () => {
        expect(nativeEl.querySelector('#largeStr').textContent).toBe('13');
      });

      it('yahtzee', () => {
        expect(nativeEl.querySelector('#yahtzee').textContent).toBe('14');
      });

      it('chance', () => {
        expect(nativeEl.querySelector('#chance').textContent).toBe('15');
      });

      it('yahtzeeBonusCounter', () => {
        expect(nativeEl.querySelector('#yahtzeeBonusCounter').textContent).toBe(
          '16'
        );
      });

      it('yahtzeeBonusTotal', () => {
        expect(nativeEl.querySelector('#yahtzeeBonusTotal').textContent).toBe(
          '17'
        );
      });

      it('grandTotalLower', () => {
        expect(nativeEl.querySelector('#grandTotalLower').textContent).toBe(
          '18'
        );
      });

      it('grandTotal', () => {
        expect(nativeEl.querySelector('#grandTotal').textContent).toBe('19');
      });
    });
  });
});
