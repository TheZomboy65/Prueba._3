import { TestBed } from '@angular/core/testing';

import { ApisService } from './apis.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApisService', () => {
  let service: ApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
