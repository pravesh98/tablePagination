import { Component, Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination-table';

  //input data

  headers: string[];
  datas: any;
  searchingColumn: boolean = false;
  totalCount: number;
  currentPage: number;
  pageLimit: number;


  //currentData
  start: number = 0;
  end: number = 10;
  prevDisable: boolean = true;
  nextDisable: boolean = false;

  sortingColumnNumber: string;
  sortingDirection: boolean = false; // true = ascending , false = descending

  dataArray: string[];
  returnData: any;

  navigationBoth: boolean = false;

  constructor() {
    this.headers = [
      "Sr",
      "FirstName",
      "LastName",
      "Mobile",
      "Address",
      "Country",
      "Pincode"
    ];

    this.datas = [
      { "Sr": "1", "FirstName": "Pravesh", "LastName": "shukla", "Mobile": "9892", "Address": "Shanti Nagar", "Country": "India", "Pincode": "400037" },
      { "Sr": "2", "FirstName": "Pravesh", "LastName": "shukla", "Mobile": "9892", "Address": "Shanti Nagar", "Country": "India", "Pincode": "400037" },
      { "Sr": "3", "FirstName": "Pravesh", "LastName": "shukla", "Mobile": "9892", "Address": "Shanti Nagar", "Country": "India", "Pincode": "400037" },
      { "Sr": "4", "FirstName": "Pravesh", "LastName": "shukla", "Mobile": "9892", "Address": "Shanti Nagar", "Country": "India", "Pincode": "400037" }
    ]
  }

  getDataArray(data: any) {
    this.returnData = new Array<String>(this.headers.length);
    this.dataArray = JSON.stringify(data).split(",");
    for (let i = 0; i < this.dataArray.length; i++) {
      let key = this.dataArray[i].split(":")[0].replace(/[\"{]/g, "");
      let value = this.dataArray[i].split(":")[1].replace(/[\"}]/g, "");

      for (let j = 0; j < this.headers.length; j++) {
        if (key == this.headers[j]) {
          this.returnData[j] = value;
        }
      }
    }

    return this.returnData;
  }

  sortColumn(header) {
    this.sortingColumnNumber = header;
    this.sortingDirection = this.sortingDirection;
  }

}
