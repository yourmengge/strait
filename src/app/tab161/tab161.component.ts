import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ydpdb',
  templateUrl: './tab161.component.html',
  styleUrls: ['./tab161.component.css']
})
export class TAB161Component implements OnInit {
  tableData: any;
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      j: '',
      k: ''
    };
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB161').subscribe((res) => {
      console.log(res);
      if (!this.data.isNull(res)) {
        this.tableData.c = res['c'];
        this.tableData.d = res['d'];
        this.tableData.e = res['e'];
        this.tableData.f = res['f'];
        this.tableData.g = res['g'];
        this.tableData.h = res['h'];
        this.tableData.j = res['j'];
        this.tableData.k = res['k'];
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB161').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  tableI(c, d, e, f, g, h) {
    if (!this.data.isAllNull(c, d, e, f, g, h)) {
      return c + d + e + f + g + h;
    }
  }

  tableL(j, k) {
    if (!this.data.isAllNull(j, k)) {
      return j + k;
    }

  }

}
