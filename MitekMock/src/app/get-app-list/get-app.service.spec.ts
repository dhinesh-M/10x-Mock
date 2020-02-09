import { TestBed } from '@angular/core/testing';

import { GetAppService } from './get-app.service';

describe('GetAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAppService = TestBed.get(GetAppService);
    expect(service).toBeTruthy();
  });
});
