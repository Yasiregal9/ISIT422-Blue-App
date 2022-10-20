import { TestBed } from '@angular/core/testing';

import { UserPlantService } from './user-plant.service';

describe('UserPlantService', () => {
  let service: UserPlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPlantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
