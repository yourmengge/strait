import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

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
export class TAB021Component implements OnInit {
  state = 'inactive';
  list: any;
  detail: any;
  constructor(public http: ApiService, public data: DataService) {
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

  ngOnInit() {
    this.getDetail();
  }

  add() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  getDetail() {
    const data = {
      projectId: this.data.projectId,
      alias: 'TAB021',
      pageNo: 1
    };
    this.http.tableDetail(data).subscribe((res) => {
      this.list = res['rows'];
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.detail, 'TAB021').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
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
      this.state = 'inactive';
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

}
