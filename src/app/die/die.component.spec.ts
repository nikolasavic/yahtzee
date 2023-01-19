import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieComponent } from './die.component';

describe('DieComponent', () => {
  let component: DieComponent;
  let fixture: ComponentFixture<DieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('default die value is 0', () => {
    const imgElement = fixture.nativeElement;

    expect(component.value).toBe(0);
    expect(imgElement.querySelector('img').src).toContain("assets/dice-0.svg");
  });

  it('renders correct image based on value', () => {
    component.value = 5;
    fixture.detectChanges();

    const imgElement = fixture.nativeElement;
    expect(imgElement.querySelector('img').src).toContain("assets/dice-5.svg");
  });
});
