// Angular imports
import { TestBed } from '@angular/core/testing';

// Local imports
import { TorreService } from './torre.service';

describe('TorreService', () => {
  let service: TorreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
