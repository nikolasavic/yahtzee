import { TestBed, ComponentFixture } from '@angular/core/testing';
import { YahtzeeComponent } from './yahtzee.component';
import { DieComponent } from './die/die.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import { RollCountComponent } from './roll-count/roll-count.component';
import { ScoreInputDisplayComponent } from './score-input-display/score-input-display.component';
import { AggregateScoreComponent } from './aggregate-score/aggregate-score.component';
import { GameStateService } from '../services/game-state.service';
import { ScoreData } from './data/score-data';
import {
  IsScoringData,
  isScoringDataWithDefaults,
} from './data/is-scoring-data';

import { BehaviorSubject, Subscription } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('YahtzeeComponent', () => {
  let component: YahtzeeComponent;
  let fixture: ComponentFixture<YahtzeeComponent>;
  let nativeEl: any;
  let gameStateServiceStub: any;

  describe('scored categories', () => {
    gameStateServiceStub = {
      scoreData$: new BehaviorSubject<ScoreData>({
        aces: 1,
        twos: 2,
        threes: 3,
        fours: 4,
        fives: 5,
        sixes: 6,
        totalUpper: 7,
        bonusUpper: 8,
        grandTotalUpper: 9,
        threeKind: 10,
        fourKind: 11,
        fullHouse: 12,
        smallStr: 13,
        largeStr: 14,
        yahtzee: 15,
        chance: 16,
        yahtzeeBonusCounter: 17,
        yahtzeeBonusTotal: 18,
        grandTotalLower: 19,
        grandTotal: 20,
      }),
      isScoringData$: new BehaviorSubject<IsScoringData>(
        isScoringDataWithDefaults({})
      ),
      rollData$: new BehaviorSubject<number[]>([]),
      round$: new BehaviorSubject<number>(0),
    };

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          YahtzeeComponent,
          DieComponent,
          DiceTrayComponent,
          RollCountComponent,
          ScoreInputDisplayComponent,
          AggregateScoreComponent,
        ],
        providers: [
          { provide: GameStateService, useValue: gameStateServiceStub },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(YahtzeeComponent);
      component = fixture.componentInstance;
      nativeEl = fixture.nativeElement;
      fixture.detectChanges();
    });

    it('unsubscribes from scoreSubscription on ngOnDestroy', () => {
      component.scoreSubscription = new Subscription();
      spyOn(component.scoreSubscription, 'unsubscribe');

      component.ngOnDestroy();

      expect(component.scoreSubscription.unsubscribe).toHaveBeenCalledTimes(1);
    });

    it('unsubscribes from isScoringSubscription on ngOnDestroy', () => {
      component.isScoringSubscription = new Subscription();
      spyOn(component.isScoringSubscription, 'unsubscribe');

      component.ngOnDestroy();

      expect(component.isScoringSubscription.unsubscribe).toHaveBeenCalledTimes(
        1
      );
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
        expect(nativeEl.querySelectorAll('div.dice-tray die img').length).toBe(
          5
        );
      });

      it('roll indicators', () => {
        expect(nativeEl.querySelector('roll-count img').src).toContain(
          'unfilledCircle.svg'
        );
      });
    });

    describe('score data', () => {
      describe('renders scores', () => {
        it('isScoring default is all false', () => {
          const expected: IsScoringData = {
            aces: false,
            twos: false,
            threes: false,
            fours: false,
            fives: false,
            sixes: false,

            threeKind: false,
            fourKind: false,
            fullHouse: false,
            smallStr: false,
            largeStr: false,
            yahtzee: false,
            chance: false,
          };
          expect(component.isScoring).toEqual(expected);
        });

        it('aces', () => {
          expect(nativeEl.querySelector('.aces').textContent).toBe('1');
        });

        it('twos', () => {
          expect(nativeEl.querySelector('.twos').textContent).toBe('2');
        });

        it('threes', () => {
          expect(nativeEl.querySelector('.threes').textContent).toBe('3');
        });

        it('fours', () => {
          expect(nativeEl.querySelector('.fours').textContent).toBe('4');
        });

        it('fives', () => {
          expect(nativeEl.querySelector('.fives').textContent).toBe('5');
        });

        it('sixes', () => {
          expect(nativeEl.querySelector('.sixes').textContent).toBe('6');
        });

        it('totalUpper', () => {
          expect(nativeEl.querySelector('.totalUpper').textContent).toBe('7');
        });

        it('bonusUpper', () => {
          expect(nativeEl.querySelector('.bonusUpper').textContent).toBe('8');
        });

        it('grandTotalUpper', () => {
          expect(nativeEl.querySelector('.grandTotalUpper').textContent).toBe(
            '9'
          );
        });

        it('threeKind', () => {
          expect(nativeEl.querySelector('.threeKind').textContent).toBe('10');
        });

        it('fourKind', () => {
          expect(nativeEl.querySelector('.fourKind').textContent).toBe('11');
        });

        it('fullHouse', () => {
          expect(nativeEl.querySelector('.fullHouse').textContent).toBe('12');
        });

        it('smallStr', () => {
          expect(nativeEl.querySelector('.smallStr').textContent).toBe('13');
        });

        it('largeStr', () => {
          expect(nativeEl.querySelector('.largeStr').textContent).toBe('14');
        });

        it('yahtzee', () => {
          expect(nativeEl.querySelector('.yahtzee').textContent).toBe('15');
        });

        it('chance', () => {
          expect(nativeEl.querySelector('.chance').textContent).toBe('16');
        });

        it('yahtzeeBonusCounter', () => {
          expect(
            nativeEl.querySelector('.yahtzeeBonusCounter').textContent
          ).toBe('17');
        });

        it('yahtzeeBonusTotal', () => {
          expect(nativeEl.querySelector('.yahtzeeBonusTotal').textContent).toBe(
            '18'
          );
        });

        it('grandTotalLower', () => {
          expect(nativeEl.querySelector('.grandTotalLower').textContent).toBe(
            '19'
          );
        });

        it('grandTotal', () => {
          expect(nativeEl.querySelector('.grandTotal').textContent).toBe('20');
        });
      });
    });
  });

  describe('scoring phase', () => {
    describe('renders scoring buttons', () => {
      beforeEach(async () => {
        let gameStateServiceStub = {
          scoreData$: new BehaviorSubject<ScoreData>({}),
          isScoringData$: new BehaviorSubject<IsScoringData>({
            aces: true,
            twos: true,
            threes: true,
            fours: true,
            fives: true,
            sixes: true,
            threeKind: true,
            fourKind: true,
            fullHouse: true,
            smallStr: true,
            largeStr: true,
            yahtzee: true,
            chance: true,
          }),
          rollData$: new BehaviorSubject<number[]>([]),
          round$: new BehaviorSubject<number>(0),
        };
        await TestBed.configureTestingModule({
          declarations: [
            YahtzeeComponent,
            DieComponent,
            DiceTrayComponent,
            RollCountComponent,
            ScoreInputDisplayComponent,
            AggregateScoreComponent,
          ],
          providers: [
            { provide: GameStateService, useValue: gameStateServiceStub },
          ],
        }).compileComponents();

        fixture = TestBed.createComponent(YahtzeeComponent);
        component = fixture.componentInstance;
        nativeEl = fixture.nativeElement;
        fixture.detectChanges();
      });

      it('aces', () => {
        expect(nativeEl.querySelector('.aces').textContent).toBe('score');
      });

      it('twos', () => {
        expect(nativeEl.querySelector('.twos').textContent).toBe('score');
      });

      it('threes', () => {
        expect(nativeEl.querySelector('.threes').textContent).toBe('score');
      });

      it('fours', () => {
        expect(nativeEl.querySelector('.fours').textContent).toBe('score');
      });

      it('fives', () => {
        expect(nativeEl.querySelector('.fives').textContent).toBe('score');
      });

      it('sixes', () => {
        expect(nativeEl.querySelector('.sixes').textContent).toBe('score');
      });

      it('threeKind', () => {
        expect(nativeEl.querySelector('.threeKind').textContent).toBe('score');
      });

      it('fourKind', () => {
        expect(nativeEl.querySelector('.fourKind').textContent).toBe('score');
      });

      it('fullHouse', () => {
        expect(nativeEl.querySelector('.fullHouse').textContent).toBe('score');
      });

      it('smallStr', () => {
        expect(nativeEl.querySelector('.smallStr').textContent).toBe('score');
      });

      it('largeStr', () => {
        expect(nativeEl.querySelector('.largeStr').textContent).toBe('score');
      });

      it('yahtzee', () => {
        expect(nativeEl.querySelector('.yahtzee').textContent).toBe('score');
      });

      it('chance', () => {
        expect(nativeEl.querySelector('.chance').textContent).toBe('score');
      });
    });
  });
});
