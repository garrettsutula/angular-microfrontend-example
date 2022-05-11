import { Artist } from './Artists';

export interface SearchCriteria {
  name: string;
}

export interface SearchState {
  loading: boolean;
  artists: Artist[];
  searchCriteria: SearchCriteria;
}