import { TestBed } from '@angular/core/testing';

import { ContactRequestServiceService } from './contact-request-service.service';

describe('ContactRequestServiceService', () => {
  let service: ContactRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
