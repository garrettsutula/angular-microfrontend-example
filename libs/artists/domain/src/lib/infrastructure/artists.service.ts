import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtistsSearchResponse, Artist } from '../entities/Artists';
import { Observable, map } from 'rxjs';

export function isNotNull<T>(value: T): value is NonNullable<T> {
  return value !== null;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) {}

  search(name: string): Observable<Artist[]> {
    return this.http.get<ArtistsSearchResponse>(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${name}`)
      .pipe(
        map(({artists}) => artists === null ? [] : artists.map((artist) => new Artist(artist)))
      )
  }
}
