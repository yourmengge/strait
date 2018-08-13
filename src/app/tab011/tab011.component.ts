import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { GetList } from '../get-list';
import { StaticService } from '../static.service';

@Component({
  selector: 'app-swspb',
  templateUrl: './tab011.component.html',
  styleUrls: ['./tab011.component.css'],
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
export class Tab011Component extends GetList {
  constructor(public http: ApiService, public data: DataService, public staticData: StaticService) {
    super(data, http, staticData);
    this.TabNum = 'TAB011';
    this.initData();
  }

  initData() {
    this.detail = {
      projectId: this.data.projectId,
      month: this.data.month(),
      b: '',
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
  edit(data) {
    this.detail = {
      projectId: this.data.projectId,
      month: this.data.month(),
      b: data.b,
      d: data.d,
      e: data.e,
      f: data.f,
      g: data.g,
      h: data.h,
      i: data.i,
      j: data.j,
      k: data.k,
      l: data.l,
      m: data.m,
      n: data.n,
      o: data.o,
      p: data.p,
      q: data.q,
      r: data.r,
      id: data.id
    };
    this.state = 'active';
  }

}
