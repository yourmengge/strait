import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab141',
  templateUrl: './tab141.component.html',
  styleUrls: ['./tab141.component.css']
})
export class Tab141Component implements OnInit {
  tableData: any;
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      j: '',
      k: '',
      l: '',
      o: '',
      id: ''
    };
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB141').subscribe((res) => {
      console.log(res);
      if (!this.data.isNull(res)) {
        this.tableData.id = res['id'] || '';
        this.tableData.j = res['j'];
        this.tableData.k = res['k'];
        this.tableData.l = res['l'];
        this.tableData.o = res['o'];
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB141').subscribe((res) => {
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
