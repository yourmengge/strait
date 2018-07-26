import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab061',
  templateUrl: './tab061.component.html',
  styleUrls: ['./tab061.component.css']
})
export class Tab061Component implements OnInit {
  tableData: any;
  month1: number;
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    switch (this.data.getJD()) {
      case 1:
        this.month1 = 1;
        break;
      case 2:
        this.month1 = 4;
        break;
      case 3:
        this.month1 = 7;
        break;
      case 4:
        this.month1 = 10;
        break;
    }
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

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB061').subscribe((res) => {
      console.log(res);
      if (!this.data.isNull(res)) {
        this.tableData = res;
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB061').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
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
