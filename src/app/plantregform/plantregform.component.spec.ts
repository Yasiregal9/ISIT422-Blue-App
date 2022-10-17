import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantregformComponent } from './plantregform.component';

describe('PlantregformComponent', () => {
  let component: PlantregformComponent;
  let fixture: ComponentFixture<PlantregformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantregformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
