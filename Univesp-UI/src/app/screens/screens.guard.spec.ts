import { TestBed } from '@angular/core/testing';

import { ScreensGuard } from './screens.guard';

describe('ScreensGuard', () => {
  let guard: ScreensGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ScreensGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
