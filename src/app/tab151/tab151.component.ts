import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';

@Component({
  selector: 'app-htwdz',
  templateUrl: './tab151.component.html',
  styleUrls: ['./tab151.component.css']
})
export class TAB151Component extends Submit {
  tableData: any; // 简单粗暴的写法
  constructor(public data: DataService, public http: ApiService) {
    super();
    this.TabNum = 'TAB151';
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
      ac: '',
      id: ''
    };
  }


  submit() {
    super.submit(this.tableData, this.data.month());
  }

  tableQ(r, s) {
    if (!this.data.isAllNull(r, s)) {
      return r + s;
    }

  }
}
