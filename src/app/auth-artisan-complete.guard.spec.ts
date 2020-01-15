import { TestBed, async, inject } from '@angular/core/testing';

import { AuthArtisanCompleteGuard } from './auth-artisan-complete.guard';

describe('AuthArtisanCompleteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthArtisanCompleteGuard]
    });
  });

  it('should ...', inject([AuthArtisanCompleteGuard], (guard: AuthArtisanCompleteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
