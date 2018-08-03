import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-tab141',
  templateUrl: './tab141.component.html',
  styleUrls: ['./tab141.component.css']
})
export class Tab141Component extends Submit {
  constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB141';
    this.tableData = {
      projectId: this.data.projectId,
      month: '',
      j: '',
      k: '',
      l: '',
      o: '',
      id: ''
    };
  }

  tableL(j, k) {
    if (!this.data.isAllNull(j, k)) {
      return j + k;
    }

  }

  tableN(l, k, j) {
    if (!this.data.isAllNull(j, k, l)) {
      return ((k + l) / j * 100).toFixed(2);
    }
  }

}
