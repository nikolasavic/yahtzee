import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieComponent } from './die.component';

describe('DieComponent', () => {
  let component: DieComponent;
  let fixture: ComponentFixture<DieComponent>;
  let nativeEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DieComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('default die value is 0', () => {
    expect(component.value).toBe(0);
    expect(nativeEl.querySelector('img').src).toContain('assets/dice-0.svg');
  });

  it('default hold value is false', () => {
    expect(component.hold).toBe(false);
  });

  it('default paused value is false', () => {
    expect(component.paused).toBe(false);
  });

  it('renders correct image source based on value input', () => {
    component.value = 5;
    fixture.detectChanges();

    expect(nativeEl.querySelector('img').src).toContain('assets/dice-5.svg');
  });

  it('sets correct position based on position input', () => {
    component.position = 1;
    fixture.detectChanges();

    expect(nativeEl.querySelector('div').classList).toContain('dice1');
  });

  describe('holds', () => {
    it('toggle hold when clicked', () => {
      let die = nativeEl.querySelector('img');
      expect(component.hold).toBe(false);

      die.click();

      expect(component.hold).toBe(true);
    });

    it('emit holdToggled when clicked', () => {
      const emitSpy = spyOn(component.holdToggled, 'emit');

      component.emitToggleHold();

      expect(emitSpy).toHaveBeenCalled();
    });

    it('applies hold css class when hold is true', () => {
      let die = nativeEl.querySelector('img');
      expect(component.hold).toBe(false);
      expect(die.classList).not.toContain('hold');

      component.hold = true;
      fixture.detectChanges();

      expect(component.hold).toBe(true);
      expect(die.classList).toContain('hold');
    });
  });
});
