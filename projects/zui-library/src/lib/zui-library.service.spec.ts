import { TestBed } from '@angular/core/testing';

import { ZuiLibraryService } from './zui-library.service';

describe('ZuiLibraryService', () => {
  let service: ZuiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZuiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
