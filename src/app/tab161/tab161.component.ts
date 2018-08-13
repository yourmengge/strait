import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-ydpdb',
  templateUrl: './tab161.component.html',
  styleUrls: ['./tab161.component.css']
})
export class TAB161Component extends Submit {
  constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB161';
    this.initData();
  }

  initData() {
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
      k: '',
      id: ''
    };
  }

  beforeGetDetail() {
    this.initData();
  }

  tableI(c, d, e, f, g, h) {
    if (!this.data.isAllNull(c, d, e, f, g, h)) {
      return (c + d + e + f + g + h).toFixed(2);
    }
  }

  tableL(j, k) {
    if (!this.data.isAllNull(j, k)) {
      return j + k;
    }

  }

}
