import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { GetList } from '../get-list';

@Component({
  selector: 'app-jfjltz',
  templateUrl: './tab052.component.html',
  styleUrls: ['./tab052.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        height: 0,
        opacity: 0
      })),
      state('active', style({
        height: '829px',
        opacity: 1
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TAB052Component extends GetList {
  detail: any;
  constructor(public http: ApiService, public data: DataService) {
    super();
    this.TabNum = 'TAB052';
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

  submit() {
    super.submit(this.detail);
    this.initData();
  }

}
