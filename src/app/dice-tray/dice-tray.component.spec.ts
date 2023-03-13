import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DiceTrayComponent } from './dice-tray.component';
import { RandomnessService } from '../../services/randomness.service';
import { GameControllerService } from '../../services/game-controller.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DiceTrayComponent', () => {
  let component: DiceTrayComponent;
  let fixture: ComponentFixture<DiceTrayComponent>;
  let nativeEl: any;
  let debugEl: any;
  let mockRandomService;
  let mockGameControllerService: any;

  beforeEach(async () => {
    mockRandomService = jasmine.createSpyObj('RandomnessService', ['rollD6']);
    mockGameControllerService = jasmine.createSpyObj('GameControllerService', [
      'diceRolled',
    ]);
    mockRandomService.rollD6.and.returnValue(3);

    await TestBed.configureTestingModule({
      declarations: [DiceTrayComponent],
      providers: [
        { provide: RandomnessService, useValue: mockRandomService },
        { provide: GameControllerService, useValue: mockGameControllerService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DiceTrayComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('is not paused by default', () => {
    expect(component.paused).toEqual(false);
  });

  it('has a blank dice for default values', () => {
    expect(component.values).toEqual([0, 0, 0, 0, 0]);
  });

  it('rolls all dice when roll all button clicked', () => {
    component.values = [1, 1, 1, 1, 1];
    let button = nativeEl.querySelector('button');

    button.click();

    expect(component.values).toEqual([3, 3, 3, 3, 3]);
  });

  it('resets internal state', () => {
    component.values = [1, 1, 1, 1, 1];
    component.onHold = [false, true, true, false, false];
    component.rollRound = 3;
    component.paused = true;

    component.reset();

    expect(component.values).toEqual([0, 0, 0, 0, 0]);
    expect(component.onHold).toEqual([false, false, false, false, false]);
    expect(component.rollRound).toBe(0);
    expect(component.paused).toBe(false);
  });

  it('informs GameControllerService of rolls', () => {
    component.rollAll();

    expect(mockGameControllerService.diceRolled).toHaveBeenCalled();
  });

  describe('holds', () => {
    it('handles holdToggled event', () => {
      let die = debugEl.query(By.css('die'));
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
      component.values = [1, 1, 1, 1, 1];
      let button = nativeEl.querySelector('button');

      button.click();

      expect(component.values).toEqual([3, 3, 1, 1, 3]);
    });

    it('unholds all dice after third roll', () => {
      component.onHold = [true, true, true, false, false];
      let die = debugEl.query(By.css('die'));

      component.rollAll();
      component.rollAll();
      component.rollAll();
      fixture.detectChanges();

      expect(component.onHold).toEqual([false, false, false, false, false]);
      expect(die.properties.hold).toBe(false);
    });
  });

  describe('paused', () => {
    it('sends children pause input', () => {
      component.paused = true;
      let die = debugEl.query(By.css('die'));
      fixture.detectChanges();

      expect(die.properties.paused).toBe(true);
    });

    it('does not roll all dice', () => {
      component.paused = true;
      component.values = [1, 1, 1, 1, 1];

      component.rollAll();

      expect(component.values).toEqual([1, 1, 1, 1, 1]);
    });
  });

  describe('roll indicators', () => {
    it('sends round to indicator', () => {
      component.rollRound = 2;
      let rollIndicator = debugEl.query(By.css('roll-count'));
      fixture.detectChanges();

      expect(rollIndicator.properties.round).toBe(2);
    });

    it('it increases after each roll', () => {
      expect(component.rollRound).toBe(0);

      component.rollAll();

      expect(component.rollRound).toBe(1);

      component.rollAll();

      expect(component.rollRound).toBe(2);

      component.rollAll();

      expect(component.rollRound).toBe(3);
    });

    it('does not increase if paused', () => {
      component.paused = true;
      expect(component.rollRound).toBe(0);

      component.rollAll();

      expect(component.rollRound).toBe(0);
    });

    it('pauses after 3 rolls', () => {
      expect(component.rollRound).toBe(0);
      expect(component.paused).toBe(false);

      component.rollAll();
      component.rollAll();
      component.rollAll();

      expect(component.paused).toBe(true);
    });
  });
});
