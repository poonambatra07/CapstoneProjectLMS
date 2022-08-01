import { TestBed } from '@angular/core/testing';

import { CartMessageServiceService } from './cart-message-service.service';

describe('CartMessageServiceService', () => {
  let service: CartMessageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartMessageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
