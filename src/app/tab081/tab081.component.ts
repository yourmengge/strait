import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { GetList } from '../get-list';
@Component({
  selector: 'app-fbfght',
  templateUrl: './tab081.component.html',
  styleUrls: ['./tab081.component.css'],
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
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class TAB081Component extends GetList {
  detail: any;
  constructor(public http: ApiService, public data: DataService) {
    super();
    this.TabNum = 'TAB081';
    this.initData();
  }

  initData() {
    this.detail = {
      projectId: this.data.projectId,
      month: this.data.getJD(),
      a: '',
      c: '',
      d: '',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      j: '',
      k: '',
      l: ''
    };
  }

  submit() {
    super.submit(this.detail);
    this.initData();
  }

}
