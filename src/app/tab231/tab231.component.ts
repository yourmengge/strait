import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-tab231',
  templateUrl: './tab231.component.html',
  styleUrls: ['./tab231.component.css']
})
export class Tab231Component extends Submit {
  constructor(public http: ApiService, public data: DataService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB231';
    this.initData();
  }

  beforeGetDetail() {
    this.initData();
  }
  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      b: '',
      d: 'B01特大型',
      e: 'C01商业',
      f: 'E01房屋建筑',
      g: 'G01工程总承包',
      h: 'H01启动及准备',
      i: '',
      j: '',
      k: '',
      m: '',
      n: '',
      o: '',
      q: '',
      s: '',
      u: '',
      v: '',
      w: '',
      y: '',
      z: '',
      ad: '是',
      ae: '是',
      ag: '局重点工程',
      ah: '',
      ai: '',
      am: '',
      ao: '',
      aq: '',
      ar: '',
      at: '',
      au: '',
      aw: '',
      ax: '在建',
      ay: '提前',
      az: '',
      ba: '',
      bb: '',
      bc: '',
      bd: '',
      be: '',
      bf: '',
      bg: '',
      bh: '',
      bi: '',
      bj: ''
    };
  }

  tableAN(a, b) {
    if (!this.data.isAllNull(a, b) && b !== 0) {
      return (a / b * 100).toFixed(2);
    }
  }

  tableAP(a, b, c) {
    if (!this.data.isAllNull(a, b, c)) {
      return this.data.showFixed(a - b + c, 2);
    }
  }

}
