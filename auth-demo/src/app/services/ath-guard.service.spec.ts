import { TestBed, inject } from '@angular/core/testing';

import { AthGuardService } from './ath-guard.service';

describe('AthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AthGuardService]
    });
  });

  it('should be created', inject([AthGuardService], (service: AthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
