import { TestBed } from '@angular/core/testing';

import { ShareAgencyService } from './share-agency.service';

describe('ShareAgencyService', () => {
  let service: ShareAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
