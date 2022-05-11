import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchFacade, SearchState } from '@music-app/artists/domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'music-app-artists-search',
  templateUrl: './artists-search.component.html',
  styleUrls: ['./artists-search.component.scss'],
})
export class ArtistsSearchComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  vm$: Observable<SearchState> = this.facade.vm$;

  constructor(private facade: SearchFacade) {}

  ngOnInit(): void {
    this.searchTerm = this.facade.buildSearchTermControl();
  }
}
