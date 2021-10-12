import { TestBed } from '@angular/core/testing';

import { NivelesService } from './niveles.service';

describe('NivelesService', () => {
  let service: NivelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
