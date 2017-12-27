import { TestBed, inject } from '@angular/core/testing';

import { AthGuard } from './ath-guard.service';

describe('AthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AthGuard]
    });
  });

  it('should be created', inject([AthGuard], (service: AthGuard) => {
    expect(service).toBeTruthy();
  }));
});
