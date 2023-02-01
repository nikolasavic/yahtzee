import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let nativeEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, DieComponent, DiceTrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('render title', () => {
    expect(nativeEl.querySelector('.title').textContent).toContain('Yahtzee!');
  });

  it('render dice tray', () => {
    expect(nativeEl.querySelector('button.roll-all').textContent).toContain(
      'Roll All'
    );
    expect(nativeEl.querySelectorAll('div.dice-tray die img').length).toBe(5);
  });
});
