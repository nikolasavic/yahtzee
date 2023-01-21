import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceTrayComponent } from './dice-tray.component';
import { DieComponent } from '../die/die.component';

describe('DiceTrayComponent', () => {
  let component: DiceTrayComponent;
  let fixture: ComponentFixture<DiceTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DieComponent,
        DiceTrayComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has a straight for default values', () => {
    expect(component.values).toEqual([1,2,3,4,5]);
  });
});
