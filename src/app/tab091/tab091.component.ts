import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';

@Component({
  selector: 'app-zblyjk',
  templateUrl: './tab091.component.html',
  styleUrls: ['./tab091.component.css']
})
export class TAB091Component extends Submit {
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    super(data, http, staticData);
    this.TabNum = 'TAB091';
    this.initData();
  }

  beforeGetDetail() {
    this.initData();
  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.getJD(),
      id: '',
      d: '1',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      j: '',
      k: '',
      l: '',
      m: '',
      o: '',
      p: '',
      q: '',
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      x: '',
      aa: '',
      ab: '',
      ad: '',
      ae: '1',
      af: '1',
      ag: '1',
      ah: '1',
      ai: '1',
      ak: '1',
      am: ''
    };
  }

  tableW(u, v) {
    if (!this.data.isAllNull(u, v)) {
      return u * parseInt(v, 0) / 100;
    }
  }

  addNum(x, y, type) {
    return this.data.addNum(x, y, type);
  }
}
