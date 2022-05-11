import { Component, Input, OnInit } from '@angular/core';
import { SearchFacade } from '@music-app/artists/domain';
import { Artist } from '@music-app/artists/domain';

@Component({
  selector: 'music-app-artists-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class ArtistsTableComponent implements OnInit {
  @Input() name?: string;
  @Input() columns: string[] = ['id', 'name', 'label', 'genre'];
  vm$ = this.facade.vm$;
  propertyInArtists = this.facade.propertyInArtists;

  constructor(private facade: SearchFacade) {}

  ngOnInit(): void {
      if(this.name) this.facade.updateSearchCriteria(this.name);
  }

}
