import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { GetList } from '../get-list';

@Component({
  selector: 'app-bzfbtz',
  templateUrl: './tab021.component.html',
  styleUrls: ['./tab021.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        height: 0,
        opacity: 0
      })),
      state('active', style({
        height: '729px',
        opacity: 1
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TAB021Component extends GetList {
  detail: any;
  constructor(public http: ApiService, public data: DataService) {
    super();
    this.TabNum = 'TAB021';
    this.initData();
  }

  initData() {
    this.detail = {
      projectId: this.data.projectId,
      month: this.data.month(),
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      j: '',
      k: '',
      l: '',
      m: '',
      n: '',
      o: '',
      p: '',
      q: '',
      r: ''
    };
  }

  submit() {
    super.submit(this.detail);
    this.initData();
  }

}
