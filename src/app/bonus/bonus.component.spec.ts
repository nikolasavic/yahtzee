import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusComponent } from './bonus.component';

describe('BonusComponent', () => {
  let component: BonusComponent;
  let fixture: ComponentFixture<BonusComponent>;
  let nativeEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BonusComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('does not show anything if there is no bonus', () => {
    expect(nativeEl.innerText).toBe('');
  });

  it('shows checkmark if bonus == 1', () => {
    component.bonusValue = 1;
    fixture.detectChanges();

    expect(nativeEl.querySelector('div img').src).toContain('check.svg');
  });

  it('shows checkmark times value if bonus > 1', () => {
    component.bonusValue = 2;
    fixture.detectChanges();

    expect(nativeEl.innerText).toBe('x2');
    expect(nativeEl.querySelector('div img').src).toContain('check.svg');
  });
});
