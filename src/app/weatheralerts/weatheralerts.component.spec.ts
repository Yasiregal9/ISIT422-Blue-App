import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheralertsComponent } from './weatheralerts.component';

describe('WeatheralertsComponent', () => {
  let component: WeatheralertsComponent;
  let fixture: ComponentFixture<WeatheralertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatheralertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatheralertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
