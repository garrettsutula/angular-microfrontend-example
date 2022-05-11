import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ArtistsService } from './artists.service';

describe('ArtistsService', () => {
  let service: ArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(ArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return coldplay search results', (done) => {
    service.search('coldplay').subscribe((artist) => {
      expect(artist).toHaveLength(1);
      expect(artist[0].name === 'Coldplay')
      done();
    })
  });
});
