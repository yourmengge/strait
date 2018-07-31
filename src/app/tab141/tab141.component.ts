import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';

@Component({
  selector: 'app-tab141',
  templateUrl: './tab141.component.html',
  styleUrls: ['./tab141.component.css']
})
export class Tab141Component extends Submit {
  tableData: any;
  constructor(public data: DataService, public http: ApiService) {
    super();
    this.TabNum = 'TAB141';
    this.tableData = {
      projectId: this.data.projectId,
      month: '',
      j: '',
      k: '',
      l: '',
      o: '',
      id: ''
    };
  }

  submit() {
    super.submit(this.tableData, this.data.getJD());
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
