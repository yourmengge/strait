import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-tab061',
  templateUrl: './tab061.component.html',
  styleUrls: ['./tab061.component.css']
})
export class Tab061Component extends Submit {
  month1: number;
  constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB061';
    const jd = this.data.getJD();
    switch (jd.substr(5, 5)) {
      case '1':
        this.month1 = 1;
        break;
      case '2':
        this.month1 = 4;
        break;
      case '3':
        this.month1 = 7;
        break;
      case '4':
        this.month1 = 10;
        break;
    }
    this.initData();

  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.getJD(),
      id: '',
      h1: 1,
      h2: '',
      i1: 1,
      i2: '',
      j1: 1,
      j2: '',
      k: '',
      l: '',
      m: '',
      n: '',
      o: '',
      p: '',
      q: '',
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      w: '',
      x: '',
      y: '',
      z: '',
      aa: '',
      ab: '',
      ac1: 1,
      ac2: 1,
      ad: '',
      ae: '',
      af: '',
      ag: '',
      ah: '',
      ai: ''
    };
  }
  tableAJ(ah, ai) {
    if (!this.data.isAllNull(ah, ai)) {
      return (this.data.addNum(ah, ai, '-') / ai * 100).toFixed(2);
    }
  }

  tableAK(ag, ah) {
    if (!this.data.isAllNull(ag, ah)) {
      return (this.data.addNum(ag, ah, '-') / ag * 100).toFixed(2);
    }
  }

  tableL(j, k) {
    if (!this.data.isAllNull(j, k)) {
      return j + k;
    }

  }

  tableN(l, k, j) {
    if (!this.data.isAllNull(j, k, l)) {
      return ((k + l) / j).toFixed(4);
    }
  }

}
