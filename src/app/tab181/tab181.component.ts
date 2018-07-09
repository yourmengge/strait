import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gjjxhgl',
  templateUrl: './tab181.component.html',
  styleUrls: ['./tab181.component.css']
})
export class TAB181Component implements OnInit {
  tableData: any; // 简单粗暴的写法
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      an: '',
      ao: '',
      ap: '',
      aq: '',
      ar: '',
      as1: '',
      au: '',
      av: '',
      ax: ''
    };
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB181').subscribe((res) => {
      console.log(res);
      if (!this.data.isNull(res)) {
        this.tableData.an = res['an'];
        this.tableData.ao = res['ao'];
        this.tableData.ap = res['ap'];
        this.tableData.aq = res['aq'];
        this.tableData.ar = res['ar'];
        this.tableData.as1 = res['as1'];
        this.tableData.au = res['au'];
        this.tableData.av = res['av'];
        this.tableData.ax = res['ax'];
      } else {
        this.tableData.an = 1;
        this.tableData.ao = 1;
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB181').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  tableAT(ar, as1) {
    if (!this.data.isAllNull(ar, as1)) {
      return (((ar - as1) / ar) * 100).toFixed(2) + '%';
    }
  }

  tableAW(au, av) {
    if (!this.data.isAllNull(au, av)) {
      return (((au - av) / au) * 100).toFixed(2) + '%';
    }
  }

}
