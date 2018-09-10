import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { GetList } from '../get-list';
import { StaticService } from '../static.service';
@Component({
  selector: 'app-wcjjg',
  templateUrl: './tab071.component.html',
  styleUrls: ['./tab071.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        height: 0,
        opacity: 0
      })),
      state('active', style({
        height: '629px',
        opacity: 1
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TAB071Component extends GetList {
  constructor(public http: ApiService, public data: DataService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB071';
    this.initData();
  }

  initData() {
    this.detail = {
      projectId: this.data.projectId,
      month: this.data.month(),
      e: '1',
      f: '',
      g: '',
      h: '',
      i2: '',
      j2: '',
      k2: '',
      l2: '',
      m2: '',
      n2: '',
      o2: '',
      p2: '',
      q2: '',
      id: ''
    };
  }
}
