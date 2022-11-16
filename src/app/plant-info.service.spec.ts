import { TestBed } from '@angular/core/testing';

import { PlantInfoService } from './plant-info.service';

describe('PlantInfoService', () => {
  let service: PlantInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
