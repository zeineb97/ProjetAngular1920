import { TestBed, async, inject } from '@angular/core/testing';

import { AuthDemandeurGuard } from './auth-demandeur.guard';

describe('AuthDemandeurGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDemandeurGuard]
    });
  });

  it('should ...', inject([AuthDemandeurGuard], (guard: AuthDemandeurGuard) => {
    expect(guard).toBeTruthy();
  }));
});
