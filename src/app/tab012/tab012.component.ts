import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Submit } from '../submit';

@Component({
  selector: 'app-yswspb',
  templateUrl: './tab012.component.html',
  styleUrls: ['./tab012.component.css']
})
export class TAB012Component extends Submit {
  tableData: any;
  constructor(public http: ApiService, public data: DataService) {
    super();
    this.TabNum = 'TAB012';
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      i: '',
      j: '',
      l: '',
      m: '',
      o: '',
      p: '',
      q: '',
      r: '',
      t: '',
      u: '',
      v: '',
      x: '',
      y: '',
      z: '',
      aa: '',
      ac: '',
      ad: '',
      af: '',
      ag: '',
      ai: '',
      aj: '',
      ak: '',
      al: '',
      an: '',
      ao: '',
      ap: '',
      aq: '',
      ar: '',
      as1: '',
      at: '',
      id: ''
    };
  }

  submit() {
    super.submit(this.tableData, this.data.month());
  }

  tableK(i, j) {
    if (!this.data.isAllNull(i, j)) {
      if (i === 0 || i === null) {
        return '';
      } else {
        return ((j / i) * 100).toFixed(2) + '%';
      }

    } else {
      return '';
    }
  }

  tableN(l, m) {
    if (!this.data.isAllNull(l, m)) {
      if (l === 0 || l === null || m === null) {
        return '';
      } else {
        return (((l - m) / l) * 100).toFixed(2) + '%';
      }
    } else {
      return '';
    }
  }

}
