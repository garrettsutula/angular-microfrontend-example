import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ArtistsSearchComponent, ArtistsTableComponent } from '@music-app/artists/feature-search';

@Component({
  selector: 'music-app-root',
  template: '',
})
export class AppComponent {
  constructor(injector: Injector) {
    const ArtistSearchElement = createCustomElement(ArtistsSearchComponent, {injector});
    customElements.define('music-app-wc-artists-search', ArtistSearchElement);

    const ArtistTableElement = createCustomElement(ArtistsTableComponent, {injector});
    customElements.define('music-app-wc-artists-table', ArtistTableElement);
  }
}