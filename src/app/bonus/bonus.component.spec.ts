import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BonusComponent } from './bonus.component';

describe('BonusComponent', () => {
  let component: BonusComponent;
  let fixture: ComponentFixture<BonusComponent>;
  let nativeEl: any;
  let debugEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BonusComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('does not show anything if bonus value is undefined', () => {
    expect(nativeEl.innerText).toBe('');
  });

  it('does not show anything if bonus value is 0', () => {
    component.value = 0;
    fixture.detectChanges();

    expect(nativeEl.innerText).toBe('');
  });

  it('shows checkmark for bonus', () => {
    component.value = 1;
    fixture.detectChanges();

    expect(nativeEl.querySelector('div img').src).toContain('check.svg');
  });

  it('shows checkmark times 2', () => {
    component.value = 2;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('2.svg');
  });

  it('shows checkmark times 3', () => {
    component.value = 3;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('3.svg');
  });

  it('shows checkmark times 4', () => {
    component.value = 4;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('4.svg');
  });

  it('shows checkmark times 5', () => {
    component.value = 5;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('5.svg');
  });

  it('shows checkmark times 6', () => {
    component.value = 6;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('6.svg');
  });

  it('shows checkmark times 7', () => {
    component.value = 7;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('7.svg');
  });

  it('shows checkmark times 8', () => {
    component.value = 8;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('8.svg');
  });

  it('shows checkmark times 9', () => {
    component.value = 9;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('9.svg');
  });

  it('shows checkmark times 10', () => {
    component.value = 10;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('1.svg');
    expect(images[3].properties.src).toContain('0.svg');
  });

  it('shows checkmark times 11', () => {
    component.value = 11;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('1.svg');
    expect(images[3].properties.src).toContain('1.svg');
  });

  it('shows checkmark times 12', () => {
    component.value = 12;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('1.svg');
    expect(images[3].properties.src).toContain('2.svg');
  });

  it('shows checkmark times 00 for all other values', () => {
    component.value = 13;
    fixture.detectChanges();

    let images = debugEl.queryAll(By.css('div img'));
    expect(images[0].properties.src).toContain('check.svg');
    expect(images[1].properties.src).toContain('x.svg');
    expect(images[2].properties.src).toContain('0.svg');
    expect(images[3].properties.src).toContain('0.svg');
  });
});
