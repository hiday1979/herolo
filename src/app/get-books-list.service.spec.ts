import { TestBed } from '@angular/core/testing';

import { GetBooksListService } from './get-books-list.service';

describe('GetBooksListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBooksListService = TestBed.get(GetBooksListService);
    expect(service).toBeTruthy();
  });
});
