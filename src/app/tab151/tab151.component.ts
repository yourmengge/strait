import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-htwdz',
  templateUrl: './tab151.component.html',
  styleUrls: ['./tab151.component.css']
})
export class TAB151Component extends Submit {
  constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB151';
    this.initData();
  }

  beforeGetDetail() {
    this.initData();
  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      w: '',
      x: '',
      z: '',
      ab: '1',
      ac: '',
      id: ''
    };
  }

  tableQ(r, s) {
    if (!this.data.isAllNull(r, s)) {
      return r + s;
    }

  }
}
