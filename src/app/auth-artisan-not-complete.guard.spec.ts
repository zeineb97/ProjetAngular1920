import { TestBed, async, inject } from '@angular/core/testing';

import { AuthArtisanNotCompleteGuard } from './auth-artisan-not-complete.guard';

describe('AuthArtisanNotCompleteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthArtisanNotCompleteGuard]
    });
  });

  it('should ...', inject([AuthArtisanNotCompleteGuard], (guard: AuthArtisanNotCompleteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
