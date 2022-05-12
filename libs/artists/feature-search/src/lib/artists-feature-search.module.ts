import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MusicUiModule } from '@music-app/music-ui';

import { ArtistsDomainModule } from '@music-app/artists/domain';
import { ArtistsTableComponent } from './table/table.component';
import { ArtistsSearchComponent } from './search/artists-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ArtistsDomainModule,
    MusicUiModule,
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
