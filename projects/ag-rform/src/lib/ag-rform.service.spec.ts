import { TestBed } from '@angular/core/testing';

import { AgRFormService } from './ag-rform.service';

describe('AgRFormService', () => {
  let service: AgRFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgRFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
