import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceTrayComponent } from './dice-tray.component';
import { DieComponent } from '../die/die.component';
import { RandomnessService } from '../randomness.service';

describe('DiceTrayComponent', () => {
  let component: DiceTrayComponent;
  let fixture: ComponentFixture<DiceTrayComponent>;
  let mockRandomService;

  beforeEach(async () => {
    mockRandomService = jasmine.createSpyObj('RandomnessService', ['rollD6']);
    mockRandomService.rollD6.and.returnValue(3);

    await TestBed.configureTestingModule({
      declarations: [DieComponent, DiceTrayComponent],
      providers: [{ provide: RandomnessService, useValue: mockRandomService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DiceTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has a straight for default values', () => {
    expect(component.values).toEqual([1, 2, 3, 4, 5]);
  });

  it('rolls all dice when roll all button clicked', () => {
    component.values = [1, 1, 1, 1, 1];
    let button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.values).toEqual([3, 3, 3, 3, 3]);
  });
});
