import { TestBed } from '@angular/core/testing';

import { DeliRequestService } from './deli-request.service';

describe('DeliRequestService', () => {
  let service: DeliRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
