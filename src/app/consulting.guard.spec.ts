import { TestBed, async, inject } from '@angular/core/testing';

import { ConsultingGuard } from './consulting.guard';

describe('ConsultingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultingGuard]
    });
  });

  it('should ...', inject([ConsultingGuard], (guard: ConsultingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
