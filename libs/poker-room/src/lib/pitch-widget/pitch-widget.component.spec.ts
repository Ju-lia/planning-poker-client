import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchWidgetComponent } from './pitch-widget.component';

describe('PitchWidgetComponent', () => {
  let component: PitchWidgetComponent;
  let fixture: ComponentFixture<PitchWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PitchWidgetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
