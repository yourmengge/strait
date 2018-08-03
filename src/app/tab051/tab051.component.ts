import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';

@Component({
  selector: 'app-jfjl',
  templateUrl: './tab051.component.html',
  styleUrls: ['./tab051.component.css']
})
export class TAB051Component extends Submit {
  contractPriceType: any;
  optionsValue: any; // 下拉框中的id
  bizType: any;
  payType: any;
  picBudgetStatus: any;
  picVerifyStatus: any;
  picBudgetStatusDis = true;
  picVerifyStatusDis = true;
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    super(data, http, staticData);
    this.contractPriceType = this.staticData.contractPriceType;
    this.bizType = this.staticData.bizType;
    this.payType = this.staticData.payType;
    this.picBudgetStatus = this.staticData.picBudgetStatus;
    this.picVerifyStatus = this.staticData.picVerifyStatus;
    this.TabNum = 'TAB051';
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      id: '',
      n: '',
      o: '1',
      p: '',
      q: '1',
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      z: '',
      aa: '',
      ab: '',
      ac: '',
      ad: '',
      ae: '',
      af: '',
      ag: '',
      ah: '',
      ai: '',
      aj: '',
      ak: '',
      al: '',
      am: '',
      an: '',
      ao: '',
      ap: '',
      aq: '',
      ar: '',
      as1: ''
    };
  }
  picBudgetStatusChange() {
    if (this.tableData.o + '' !== '0') {
      this.picBudgetStatusDis = true;
      this.tableData['p'] = '';
    } else {
      this.picBudgetStatusDis = false;

    }
  }

  picVerifyStatusChange() {
    if (this.tableData.q + '' !== '0') {
      this.picVerifyStatusDis = true;
      this.tableData.r = '';
    } else {
      this.picVerifyStatusDis = false;

    }
  }
}
