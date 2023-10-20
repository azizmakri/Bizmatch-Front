import { TestBed } from '@angular/core/testing';

import { CampagneMarketingService } from './campagne-marketing.service';

describe('CampagneMarketingService', () => {
  let service: CampagneMarketingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampagneMarketingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
