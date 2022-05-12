import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, Observable, pluck, map, switchMap, debounceTime } from 'rxjs';
import { FormControl } from '@angular/forms';

import { Artist } from '../entities/Artists';
import { ArtistsService } from '../infrastructure/artists.service';
import { SearchState } from '../entities/Search';

let _state: SearchState = {
  loading: false,
  artists: [],
  searchCriteria: { name: '' },
};

@Injectable({
  providedIn: 'root'
})
export class SearchFacade {
  private store = new BehaviorSubject<SearchState>(_state);
  private state$ = this.store.asObservable();

  artists$ = this.state$.pipe(pluck('artists'), distinctUntilChanged());
  searchCriteria$ = this.state$.pipe(pluck('searchCriteria'), distinctUntilChanged());
  loading$ = this.state$.pipe(pluck('loading'));

  vm$: Observable<SearchState> = combineLatest([ this.artists$, this.searchCriteria$, this.loading$ ])
    .pipe(
      map(([artists, searchCriteria, loading]) => Object.assign({}, { artists, searchCriteria, loading }))
      )

  constructor(private artistsSvc: ArtistsService) { 
    combineLatest([this.searchCriteria$])
      .pipe(
        switchMap(([searchCriteria]) => {
          return this.searchArtists(searchCriteria.name);
        })
      )
      .subscribe((artists) => {
        this.updateState({ ..._state, artists, loading: false});
      })
  }

  // Public Methods
  updateSearchCriteria(name: string) {
    const searchCriteria = { name }
    this.updateState({..._state, searchCriteria, loading: true });
  }
  
  searchArtists(name: string): Observable<Artist[]> {
    return this.artistsSvc.search(name);
  }

  buildSearchTermControl(): FormControl {
    const searchTerm = new FormControl();
    searchTerm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => this.updateSearchCriteria((value as string)));

    return searchTerm;
  }

  // Private Methods
  private updateState(state: SearchState) {
    this.store.next((_state = state));
  }
}
