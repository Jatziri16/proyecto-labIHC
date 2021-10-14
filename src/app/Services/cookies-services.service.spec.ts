import { TestBed } from '@angular/core/testing';

import { CookiesServicesService } from './cookies-services.service';

describe('CookiesServicesService', () => {
  let service: CookiesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookiesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
