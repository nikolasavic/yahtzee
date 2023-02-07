import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreInputDisplayComponent } from './score-input-display.component';

describe('ScoreInputDisplayComponent', () => {
  let component: ScoreInputDisplayComponent;
  let fixture: ComponentFixture<ScoreInputDisplayComponent>;
  let nativeEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreInputDisplayComponent],
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
  });
});
