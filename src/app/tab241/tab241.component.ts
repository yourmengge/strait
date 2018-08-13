import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';

@Component({
  selector: 'app-tab241',
  templateUrl: './tab241.component.html',
  styleUrls: ['./tab241.component.css']
})
export class Tab241Component extends Submit {
  actionType: boolean;
  tableData2: any;
  constructor(public http: ApiService, public data: DataService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB241';
    this.actionType = false;
    this.initData();
  }

  action() {
    this.actionType = !this.actionType;
  }

  tableU(a, b) {
    if (!this.data.isAllNull(a, b)) {
      return this.data.returnPercent(this.data.chu(b, a));
    } else {
      return '';
    }
  }

  beforeSubmit() {

  }

  submit() {
    this.beforeSubmit();
    if (this.data.submitCycle === 1 || this.data.submitCycle === '1') {
      this.tableData2.month = this.data.getJD();
    } else {
      this.tableData2.month = this.data.month();
    }
    this.tableData.projectId = this.data.projectId;
    this.tableData2.projectId = this.data.projectId;
    this.http.postTableDetail(this.tableData, this.TabNum + 'Ext').subscribe(() => {
      this.http.postTableDetail(this.tableData2, this.TabNum).subscribe(() => {
        this.getDetail();
        this.data.ErrorMsg('提交成功');
      }, (err) => {
        this.data.error = err.error;
        this.data.isError();
      });
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  getDetail() {
    this.initData();
    this.http.getTableDetail(this.data.projectId, this.TabNum).subscribe((res) => {
      if (!this.data.isNull(res)) {
        this.tableData2 = res;
        this.tableData2.id = res['id'] || '';
      }
      this.http.getTableDetailProject(this.data.projectId, this.TabNum + 'Ext').subscribe((response) => {
        if (!this.data.isNull(response)) {
          this.tableData = response;
          this.tableData.id = response['id'] || '';
          if (response['id'] !== '') {
            this.actionType = true;
          }
        }
      }, (err) => {
        this.data.error = err.error;
        this.data.isError();
      });
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  tableAF(a, b) {
    if (!this.data.isAllNull(a, b)) {
      return this.data.returnPercent(1 - this.data.chu(b, a));
    } else {
      return '';
    }
  }

  initData() {
    this.tableData = {
      id: '',
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
      t: '',
      v: '',
      w: '',
      x: '',
      y: '',
      z: '',
      aa: '',
      ab: '',
      ac: '',

    };
    this.tableData2 = {
      id: '',
      ad: '',
      ae: '',
      ag: '',
      ah: '',
      ai: '',
      aj: '',
      ak: '',
      al: '',
      am: '',
      an: ''
    };
  }
}
