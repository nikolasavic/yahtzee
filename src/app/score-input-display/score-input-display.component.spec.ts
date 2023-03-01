import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreInputDisplayComponent } from './score-input-display.component';
import { ScoringService } from '../../services/scoring.service';

describe('ScoreInputDisplayComponent', () => {
  let component: ScoreInputDisplayComponent;
  let fixture: ComponentFixture<ScoreInputDisplayComponent>;
  let nativeEl: any;
  let mockScoringService: any;

  beforeEach(async () => {
    mockScoringService = jasmine.createSpyObj('ScoringService', [
      'recordScore',
    ]);

    await TestBed.configureTestingModule({
      declarations: [ScoreInputDisplayComponent],
      providers: [{ provide: ScoringService, useValue: mockScoringService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreInputDisplayComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('display', () => {
    it('shows scored value', () => {
      component.score = 34;
      fixture.detectChanges();

      expect(nativeEl.innerText).toContain('34');
    });

    it('does not show anything if unscored', () => {
      expect(nativeEl.innerText).toBe('');
    });

    it('uses input id', () => {
      component.id = 'specialId';
      component.score = 32;
      fixture.detectChanges();

      expect(nativeEl.querySelector('div').classList).toContain('specialId');
    });
  });

  describe('scorePhase', () => {
    it('shows score button', () => {
      component.isScoringPhase = true;
      fixture.detectChanges();

      expect(nativeEl.innerText).toContain('score');
    });

    it('records score', () => {
      const category = 'aces';
      component.isScoringPhase = true;
      component.id = category;
      fixture.detectChanges();

      let scoreButton = nativeEl.querySelector('button');

      scoreButton.click();

      expect(mockScoringService.recordScore).toHaveBeenCalledOnceWith(category);
    });
  });
});
