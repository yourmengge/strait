import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';

@Component({
  selector: 'app-gjjxhgl',
  templateUrl: './tab181.component.html',
  styleUrls: ['./tab181.component.css']
})
export class TAB181Component extends Submit {
  constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB181';
    this.initData();
  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      an: '1',
      ao: '1',
      ap: '',
      aq: '',
      ar: '',
      id: '',
      as1: '',
      au: '',
      av: '',
      ax: ''
    };
  }

  beforeGetDetail() {
    this.initData();
  }

  tableAT(ar, as1) {
    if (!this.data.isAllNull(ar, as1) && ar !== 0) {
      return (((ar - as1) / ar) * 100).toFixed(2) + '%';
    }
  }

  tableAW(au, av) {
    if (!this.data.isAllNull(au, av) && au !== 0) {
      return (((au - av) / au) * 100).toFixed(2) + '%';
    }
  }

}
