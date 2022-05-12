import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { propertyExistsInCollection } from '@music-app/music-utils';

@Component({
  selector: 'music-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() rows: Record<string, any>[] = [];
  @Input() columns: string[] = ['id', 'name'];
  _tableColumns: string[] = [];
  
  ngOnChanges(): void {
    this._tableColumns = this.columns.filter((column) => propertyExistsInCollection(column, this.rows));
  }
  
}
