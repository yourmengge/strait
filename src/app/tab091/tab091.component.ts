import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-zblyjk',
  templateUrl: './tab091.component.html',
  styleUrls: ['./tab091.component.css']
})
export class TAB091Component implements OnInit {
  tableData: any; // 简单粗暴的写法
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.getJD(),
      d: '1',
      e: '',
      f: '',
      g: '',
      h: '',
      i: '',
      j: '',
      k: '',
      l: '',
      m: '',
      o: '',
      p: '',
      q: '',
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      x: '',
      aa: '',
      ab: '',
      ad: '',
      ae: '1',
      af: '1',
      ag: '1',
      ah: '1',
      ai: '1',
      ak: '1',
      am: ''
    };
  }

  ngOnInit() {
    this.getDetail();
  }

  keyup() {
    return this.data.keyup();
  }


  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB091').subscribe((res) => {
      console.log(res);
      if (!this.data.isNull(res)) {
        this.tableData.d = res['d'];
        this.tableData.e = res['f'];
        this.tableData.f = res['f'];
        this.tableData.g = res['g'];
        this.tableData.h = res['h'];
        this.tableData.h = res['h'];
        this.tableData.i = res['i'];
        this.tableData.j = res['j'];
        this.tableData.k = res['k'];
        this.tableData.l = res['l'];
        this.tableData.m = res['m'];
        this.tableData.n = res['n'];
        this.tableData.o = res['o'];
        this.tableData.p = res['p'];
        this.tableData.q = res['q'];
        this.tableData.r = res['r'];
        this.tableData.s = res['s'];
        this.tableData.t = res['t'];
        this.tableData.u = res['u'];
        this.tableData.v = res['v'];
        this.tableData.x = res['x'];
        this.tableData.aa = res['aa'];
        this.tableData.ab = res['ab'];
        this.tableData.ad = res['ad'];
        this.tableData.ae = res['ae'];
        this.tableData.af = res['af'];
        this.tableData.ag = res['ag'];
        this.tableData.ah = res['ah'];
        this.tableData.ai = res['ai'];
        this.tableData.ak = res['ak'];
        this.tableData.am = res['am'];
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB091').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }
  verifyNum(num: string, name: string) {
    num = num.toString();
    if (this.staticData.isFreeNum.test(num)) {
      if (num.indexOf('.') > 0) {
        let second = num.split('.')[1];
        const first = num.split('.')[0];
        if (second.length === 1) {
          second = second + '000';
        }
        if (second.length === 2) {
          second = second + '00';
        }
        if (second.length === 3) {
          second = second + '0';
        }

        if (second.length === 0) {
          second = second + '0000';
        }
        num = first + '.' + second;
      } else {
        num = num + '.0000';
      }
      this.tableData[name] = num;
    } else {
      this.staticData.alertDiv = this.staticData.show;
      this.data.hideAlert();
    }
  }

  tableW(u, v) {
    if (!this.data.isAllNull(u, v)) {
      return u * parseInt(v, 0) / 100;
    }
  }

  tableY(w, x) {
    if (!this.data.isAllNull(w, x)) {
      return w - x;
    }
  }

  tableZ(t, x) {
    if (!this.data.isAllNull(t, x)) {
      return t - x;
    }
  }

  tableAC(aa, ab) {
    if (!this.data.isAllNull(aa, ab)) {
      return aa - ab;
    }
  }

}
