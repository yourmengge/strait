import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { GetList } from '../get-list';
import { StaticService } from '../static.service';

@Component({
  selector: 'app-tab201',
  templateUrl: './tab201.component.html',
  styleUrls: ['./tab201.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        height: 0,
        opacity: 0
      })),
      state('active', style({
        height: '629px',
        opacity: 1
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class Tab201Component extends GetList {
  state = 'inactive';
  list: any;
  tableTitle: string;
  tableType: number;
  constructor(public http: ApiService, public data: DataService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB201';
    this.tableType = 1;
    this.tableTitle = '工程专业分包合同登记表';
    this.initData();
  }

  initData() {
    this.detail = {
      projectId: this.data.projectId,
      month: this.data.getJD(),
      b: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      j: '',
      k: '',
      l: '',
      m: '',
      n: '',
      o: '',
      p: '',
      q: '',
      r: '',
      s: '',
      type: this.tableType
    };
    if (this.tableType === 2 || this.tableType === 1) {
      this.detail.j = '是';
      this.detail.q = '是';
    }
    if (this.tableType === 3) {
      this.detail.i = '是';
      this.detail.o = '是';
    }
    if (this.tableType === 4) {
      this.detail.k = '是';
      this.detail.q = '是';
    }
    if (this.tableType === 5) {
      this.detail.h = '是';
      this.detail.m = '是';
    }
  }

  getDetail() {
    this.list = [];
    const data = {
      projectId: this.data.projectId,
      alias: 'TAB201',
      pageNo: 1,
      type: this.tableType
    };
    this.http.tableDetail(data).subscribe((res) => {
      this.list = res['rows'];
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  tab1(num: number) {
    this.tableType = num;
    this.initData();
    switch (num) {
      case 1:
        this.tableTitle = '工程专业分包合同登记表';
        break;
      case 2:
        this.tableTitle = '工程劳务分包合同登记表';
        break;
      case 3:
        this.tableTitle = '工程材料采购合同登记表';
        break;
      case 4:
        this.tableTitle = '工程设备租赁合同登记表';
        break;
      case 5:
        this.tableTitle = '工程其他合同登记表';
        break;
    }
    this.getDetail();
  }

  isTrue(string) {
    return string === '1' ? '是' : '否';
  }

}
