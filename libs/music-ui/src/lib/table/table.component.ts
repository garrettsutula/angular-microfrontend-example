import { Component, Input, OnInit } from '@angular/core';
import { SearchFacade } from '@music-app/artists/domain';

import { propertyExistsInCollection } from '@music-app/music-utils';

@Component({
  selector: 'music-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() rows: Record<string, any>[] = [];
  @Input() columns: string[] = ['id', 'name'];
  vm$ = this.facade.vm$;

  constructor(private facade: SearchFacade) {}

  ngOnInit(): void {
      this.columns = this.columns.filter((column) => propertyExistsInCollection(column, this.rows));
  }
  

}
