import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DiceTrayComponent } from './dice-tray.component';
import { RandomnessService } from '../randomness.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DiceTrayComponent', () => {
  let component: DiceTrayComponent;
  let fixture: ComponentFixture<DiceTrayComponent>;
  let nativeEl: any;
  let mockRandomService;

  beforeEach(async () => {
    mockRandomService = jasmine.createSpyObj('RandomnessService', ['rollD6']);
    mockRandomService.rollD6.and.returnValue(3);

    await TestBed.configureTestingModule({
      declarations: [DiceTrayComponent],
      providers: [{ provide: RandomnessService, useValue: mockRandomService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DiceTrayComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('is not paused by default', () => {
    expect(component.paused).toEqual(false);
  });

  it('has a straight for default values', () => {
    expect(component.values).toEqual([1, 2, 3, 4, 5]);
  });

  it('rolls all dice when roll all button clicked', () => {
    component.values = [1, 1, 1, 1, 1];
    let button = nativeEl.querySelector('button');

    button.click();

    expect(component.values).toEqual([3, 3, 3, 3, 3]);
  });

  describe('holds', () => {
    it('handles holdToggled event', () => {
      let die = fixture.debugElement.query(By.css('die'));
      spyOn(component, 'toggleDie');

      die.triggerEventHandler('holdToggled', 0);
      fixture.detectChanges();

      expect(component.toggleDie).toHaveBeenCalledOnceWith(0);
    });

    it('toggleDie sets hold to true', () => {
      expect(component.onHold).toEqual([false, false, false, false, false]);

      component.toggleDie(1);

      expect(component.onHold).toEqual([true, false, false, false, false]);
    });

    it('only rolls dice not on hold', () => {
      component.onHold = [false, false, true, true, false];
      expect(component.values).toEqual([1, 2, 3, 4, 5]);
      let button = nativeEl.querySelector('button');

      button.click();

      expect(component.values).toEqual([3, 3, 3, 4, 3]);
    });
  });
});
