import { TestBed } from '@angular/core/testing';

import { MyauthGuard } from './myauth.guard';

describe('MyauthGuard', () => {
  let guard: MyauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
