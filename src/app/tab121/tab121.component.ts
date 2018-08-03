import { Component } from '@angular/core';
import { Submit } from '../submit';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-tab121',
  templateUrl: './tab121.component.html',
  styleUrls: ['./tab121.component.css']
})
export class Tab121Component extends Submit {
  score: number;
  constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB121';
    this.initData();
  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      info11: '',
      info12: '',
      info22: '',
      info31: '',
      info41: '',
      info42: '',
      resource11: '',
      resource12: '',
      resource31: '',
      resource32: '',
      resource21: '',
      resource22: '',
      assess11: '',
      assess12: '',
      assess21: '',
      assess22: '',
      assess31: '',
      assess32: '',
      assess41: '',
      assess42: '',
      assess51: '',
      assess52: '',
      assess61: '',
      assess62: '',
      assess71: '',
      assess72: '',
      score1: '',
      result1: ''
    };
  }

  score1(a: number, ...b: number[]) {
    let score = 0;
    if (!this.data.isAllNull(a, ...b)) {
      score = a;
      b.forEach(element => {
        score = score + element;
      });
      this.score = score;
      return score;
    }
  }

  result() {
    if (this.score < 70) {
      return '不合格';
    } else if (this.score >= 70) {
      return '合格';
    } else {
      return '';
    }
  }


}
