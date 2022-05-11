import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArtistsFeatureSearchModule } from '@music-app/artists/feature-search';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArtistsFeatureSearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
