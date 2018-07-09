import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-htwdz',
  templateUrl: './tab151.component.html',
  styleUrls: ['./tab151.component.css']
})
export class TAB151Component implements OnInit {
  tableData: any; // 简单粗暴的写法
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      w: '',
      x: '',
      z: '',
      ab: '1',
      ac: ''
    };
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB151').subscribe((res) => {
      console.log(res);
      if (!this.data.isNull(res)) {
        this.tableData.r = res['r'];
        this.tableData.s = res['s'];
        this.tableData.t = res['t'];
        this.tableData.u = res['u'];
        this.tableData.v = res['v'];
        this.tableData.w = res['w'];
        this.tableData.x = res['x'];
        this.tableData.z = res['z'];
        this.tableData.ab = res['ab'];
        this.tableData.ac = res['ac'];
      } else {
        this.tableData.ab = '1';
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB151').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  tableQ(r, s) {
    if (!this.data.isAllNull(r, s)) {
      return r + s;
    }

  }
}
