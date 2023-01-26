import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieComponent } from './die.component';

describe('DieComponent', () => {
  let component: DieComponent;
  let fixture: ComponentFixture<DieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default die value is 0', () => {
    const imgElement = fixture.nativeElement;

    expect(component.value).toBe(0);
    expect(imgElement.querySelector('img').src).toContain('assets/dice-0.svg');
  });

  it('default hold value is false', () => {
    const imgElement = fixture.nativeElement;

    expect(component.hold).toBe(false);
  });

  it('renders correct image source based on value input', () => {
    component.value = 5;
    fixture.detectChanges();

    const imgElement = fixture.nativeElement;
    expect(imgElement.querySelector('img').src).toContain('assets/dice-5.svg');
  });

  it('sets correct position based on position input', () => {
    component.position = 1;
    fixture.detectChanges();

    const divElement = fixture.nativeElement;
    expect(divElement.querySelector('div').classList).toContain('dice1');
  });

  it('toggle hold when clicked', () => {
    let die = fixture.debugElement.nativeElement.querySelector('img');
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
    let die = fixture.debugElement.nativeElement.querySelector('img');
    expect(component.hold).toBe(false);
    expect(die.classList).not.toContain('hold');

    component.hold = true;
    fixture.detectChanges();

    expect(component.hold).toBe(true);
    expect(die.classList).toContain('hold');
  });
});
