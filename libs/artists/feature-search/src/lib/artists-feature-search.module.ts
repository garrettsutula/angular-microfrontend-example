import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ArtistsDomainModule } from '@music-app/artists/domain';

import { ArtistsSearchComponent } from './search/artists-search.component';
import { ArtistsTableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ArtistsDomainModule
  ],
  declarations: [
    ArtistsSearchComponent,
    ArtistsTableComponent,
  ],
  exports: [
    ArtistsSearchComponent,
    ArtistsTableComponent,
  ]
})
export class ArtistsFeatureSearchModule {}
