import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlantDetailsComponent } from './info-plant-details.component';

describe('InfoPlantDetailsComponent', () => {
  let component: InfoPlantDetailsComponent;
  let fixture: ComponentFixture<InfoPlantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPlantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
