import { TestBed } from '@angular/core/testing';

import { HomeAddAppService } from './home-add-app.service';

describe('HomeAddAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeAddAppService = TestBed.get(HomeAddAppService);
    expect(service).toBeTruthy();
  });
});
