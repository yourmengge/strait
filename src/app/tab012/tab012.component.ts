import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';

@Component({
  selector: 'app-yswspb',
  templateUrl: './tab012.component.html',
  styleUrls: ['./tab012.component.css']
})
export class TAB012Component extends Submit {
  constructor(public http: ApiService, public data: DataService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB012';
    this.initData();
  }

  beforeGetDetail() {
    this.initData();
  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      i: '',
      j: '',
      l: '',
      m: '',
      o: '',
      p: '',
      q: '',
      r: '',
      t: '',
      u: '',
      v: '',
      x: '',
      y: '',
      z: '',
      aa: '',
      ac: '',
      ad: '',
      af: '',
      ag: '',
      ai: '',
      aj: '',
      ak: '',
      al: '',
      an: '',
      ao: '',
      ap: '',
      aq: '',
      ar: '',
      as1: '',
      at: '',
      id: ''
    };
  }

  tableK(i, j) {
    if (!this.data.isAllNull(i, j)) {
      return this.data.returnPercent(this.data.chu(j, i));
    } else {
      return '';
    }
  }

  tableN(l, m) {
    if (!this.data.isAllNull(l, m)) {
      return this.data.returnPercent(this.data.chu((l - m), l));
    } else {
      return '';
    }
  }

  beforeSubmit() {
    this.tableData.fileList = this.fileList;
  }

  afterGetDetail() {
    this.initImgList();
  }

  needOSS() {
    this.getOssToken();
  }

}
