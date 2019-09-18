import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ptable',
  templateUrl: 'table-pagination-component.html',
  styles: []
})
export class TablePaginationComponent implements OnInit {

  @Input() header: string [];
  @Input() data:any;
  @Input() searchingColumn : boolean = false;
  @Input() totalCount: number;
  currentPage: number;
  @Input() pageLimit: number;
  start: number = 0;
  end: number = 10;

  sortingColumnNumber: number;
  sortingDirection: number; // 1 = ascending , 2 = descending

  constructor() { }

  ngOnInit() {
  }

}
