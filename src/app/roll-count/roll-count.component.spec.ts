import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollCountComponent } from './roll-count.component';

describe('RollCountComponent', () => {
  let component: RollCountComponent;
  let fixture: ComponentFixture<RollCountComponent>;
  let nativeEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RollCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RollCountComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('render 3 indicator circles', () => {
    expect(nativeEl.querySelectorAll('img').length).toBe(3);
  });

  it('default is unfilled', () => {
    let nodeList = nativeEl.querySelectorAll('img');

    expect(nodeList[0].src).toContain('assets/unfilledCircle.svg');
    expect(nodeList[1].src).toContain('assets/unfilledCircle.svg');
    expect(nodeList[2].src).toContain('assets/unfilledCircle.svg');
  });

  it('renders after first roll', () => {
    component.round = 1;
    component.ngOnChanges({
      round: new SimpleChange(0, 1, false),
    });
    fixture.detectChanges();
    let nodeList = nativeEl.querySelectorAll('img');

    expect(nodeList[0].src).toContain('assets/filledCircle.svg');
    expect(nodeList[1].src).toContain('assets/unfilledCircle.svg');
    expect(nodeList[2].src).toContain('assets/unfilledCircle.svg');
  });

  it('renders after second roll', () => {
    component.round = 2;
    component.ngOnChanges({
      round: new SimpleChange(1, 2, false),
    });
    fixture.detectChanges();
    let nodeList = nativeEl.querySelectorAll('img');

    expect(nodeList[0].src).toContain('assets/filledCircle.svg');
    expect(nodeList[1].src).toContain('assets/filledCircle.svg');
    expect(nodeList[2].src).toContain('assets/unfilledCircle.svg');
  });

  it('renders after third roll', () => {
    component.round = 3;
    component.ngOnChanges({
      round: new SimpleChange(2, 3, false),
    });
    fixture.detectChanges();
    let nodeList = nativeEl.querySelectorAll('img');

    expect(nodeList[0].src).toContain('assets/filledCircle.svg');
    expect(nodeList[1].src).toContain('assets/filledCircle.svg');
    expect(nodeList[2].src).toContain('assets/filledCircle.svg');
  });
});
