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
});
