import { TestBed } from '@angular/core/testing';

import { DecouverteTendanceService } from './decouverte-tendance.service';

describe('DecouverteTendanceService', () => {
  let service: DecouverteTendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecouverteTendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
