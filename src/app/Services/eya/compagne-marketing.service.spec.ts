import { TestBed } from '@angular/core/testing';

import { CompagneMarketingService } from './compagne-marketing.service';

describe('CompagneMarketingService', () => {
  let service: CompagneMarketingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompagneMarketingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
