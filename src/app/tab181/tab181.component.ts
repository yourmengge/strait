import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';

@Component({
  selector: 'app-gjjxhgl',
  templateUrl: './tab181.component.html',
  styleUrls: ['./tab181.component.css']
})
export class TAB181Component extends Submit {
  tableData: any;
  constructor(public data: DataService, public http: ApiService) {
    super();
    this.TabNum = 'TAB181';
    this.initData();
  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      an: '1',
      ao: '1',
      ap: '',
      aq: '',
      ar: '',
      id: '',
      as1: '',
      au: '',
      av: '',
      ax: ''
    };
  }


  submit() {
    super.submit(this.tableData, this.data.month());
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
