import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateScoreComponent } from './aggregate-score.component';

describe('AggregateScoreComponent', () => {
  let component: AggregateScoreComponent;
  let fixture: ComponentFixture<AggregateScoreComponent>;
  let nativeEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AggregateScoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AggregateScoreComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  describe('display', () => {
    it('shows scored value', () => {
      component.value = 34;
      fixture.detectChanges();

      expect(nativeEl.innerText).toContain('34');
    });

    it('does not show anything if unscored', () => {
      expect(nativeEl.innerText).toBe('');
    });

    it('uses input id', () => {
      component.id = 'grandTotal';
      fixture.detectChanges();

      expect(nativeEl.querySelector('div').classList).toContain('grandTotal');
    });
  });
});
