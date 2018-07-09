import { TestBed, inject } from '@angular/core/testing';

import { AcccesGuardService } from './accces-guard.service';

describe('AcccesGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcccesGuardService]
    });
  });

  it('should be created', inject([AcccesGuardService], (service: AcccesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
