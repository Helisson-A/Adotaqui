import { TestBed } from '@angular/core/testing';

import { PetRegisterService } from './pet-register.service';

describe('PetRegisterService', () => {
  let service: PetRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
