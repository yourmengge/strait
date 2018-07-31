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
  tableData: any; // 简单粗暴的写法
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    super();
    this.TabNum = 'TAB091';
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

  submit() {
    if (!this.data.isFormat(this.tableData.o)) {
      this.data.ErrorMsg2('质量合格率');
    } else {
      super.submit(this.tableData, this.data.getJD());
    }

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
