import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollCountComponent } from './roll-count.component';

describe('RollCountComponent', () => {
  let component: RollCountComponent;
  let fixture: ComponentFixture<RollCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RollCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RollCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
