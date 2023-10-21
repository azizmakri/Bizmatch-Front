import { TestBed } from '@angular/core/testing';

import { PrestationServiceService } from './prestation-service.service';

describe('PrestationServiceService', () => {
  let service: PrestationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
