import { TestBed } from '@angular/core/testing';

import { SessionAdminGuard } from './session-admin.guard';

describe('SessionAdminGuard', () => {
  let guard: SessionAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SessionAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
