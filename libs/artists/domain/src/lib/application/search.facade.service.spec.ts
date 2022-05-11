import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SearchFacade } from './search.facade.service';
import { FormControl } from '@angular/forms';

describe('SearchFacade', () => {
  let service: SearchFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
    });
    service = TestBed.inject(SearchFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have no search results at first', (done) => {
    service.artists$.subscribe((artists) => {
      expect(artists).toHaveLength(0);
      done();
    })
  });

  it('should return search results', (done) => {
    service.updateSearchCriteria('the who');

    service.vm$.subscribe(({artists, loading}) => {
      if( loading === false ) {
        expect(artists.length).toBeGreaterThan(0);
        done();
      }
    });
  });

  it('should return a search form control', () => {
    expect(service.buildSearchTermControl()).toBeInstanceOf(FormControl);
  })
});
