import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { Submit } from '../submit';

@Component({
  selector: 'app-ydpdb',
  templateUrl: './tab161.component.html',
  styleUrls: ['./tab161.component.css']
})
export class TAB161Component extends Submit {
  tableData: any;
  constructor(public data: DataService, public http: ApiService) {
    super();
    this.TabNum = 'TAB161';
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

  submit() {
    super.submit(this.tableData, this.data.month());
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
