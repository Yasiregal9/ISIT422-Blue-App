import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantupdateformComponent } from './plantupdateform.component';

describe('PlantupdateformComponent', () => {
  let component: PlantupdateformComponent;
  let fixture: ComponentFixture<PlantupdateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantupdateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantupdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
