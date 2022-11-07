import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlantDetailsComponent } from './user-plant-details.component';

describe('UserPlantDetailsComponent', () => {
  let component: UserPlantDetailsComponent;
  let fixture: ComponentFixture<UserPlantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
