import { TestBed } from '@angular/core/testing';

import { SmsapiService } from './smsapi.service';

describe('SmsapiService', () => {
  let service: SmsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
