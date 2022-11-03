import { TestBed } from '@angular/core/testing';

import { UpdatePlantService } from './update-plant.service';

describe('UpdatePlantService', () => {
  let service: UpdatePlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});