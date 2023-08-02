import { TestBed } from '@angular/core/testing';

import { NgtakiService } from './ngtaki.service';

describe('NgtakiService', () => {
  let service: NgtakiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgtakiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
