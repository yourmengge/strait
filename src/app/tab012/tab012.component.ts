import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';

@Component({
  selector: 'app-yswspb',
  templateUrl: './tab012.component.html',
  styleUrls: ['./tab012.component.css']
})
export class TAB012Component implements OnInit {
  tableData: any;
  constructor(public http: ApiService, public data: DataService, public staticData: StaticService, ) {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      i: '',
      j: '',
      l: '',
      m: '',
      o: '',
      p: '',
      q: '',
      r: '',
      t: '',
      u: '',
      v: '',
      x: '',
      y: '',
      z: '',
      aa: '',
      ac: '',
      ad: '',
      af: '',
      ag: '',
      ai: '',
      aj: '',
      ak: '',
      al: '',
      an: '',
      ao: '',
      ap: '',
      aq: '',
      ar: '',
      as1: '',
      at: '',
      id: ''
    };
  }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB012').subscribe((res) => {
      console.log(res);
      this.tableData.id = res['id'] || '';
      this.tableData.i = res['i'];
      this.tableData.j = res['j'];
      this.tableData.l = res['l'];
      this.tableData.m = res['m'];
      this.tableData.o = res['o'];
      this.tableData.p = res['p'];
      this.tableData.q = res['q'];
      this.tableData.r = res['r'];
      this.tableData.t = res['t'];
      this.tableData.u = res['u'];
      this.tableData.v = res['v'];
      this.tableData.x = res['x'];
      this.tableData.y = res['y'];
      this.tableData.z = res['z'];
      this.tableData.aa = res['aa'];
      this.tableData.ac = res['ac'];
      this.tableData.ad = res['ad'];
      this.tableData.af = res['af'];
      this.tableData.ag = res['ag'];
      this.tableData.ai = res['ai'];
      this.tableData.aj = res['aj'];
      this.tableData.ak = res['ak'];
      this.tableData.al = res['al'];
      this.tableData.an = res['an'];
      this.tableData.ao = res['ao'];
      this.tableData.ap = res['ap'];
      this.tableData.aq = res['aq'];
      this.tableData.ar = res['ar'];
      this.tableData.as1 = res['as1'];
      this.tableData.at = res['at'];
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB012').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  tableK(i, j) {
    if (!this.data.isAllNull(i, j)) {
      if (i === 0 || i === null) {
        return '';
      } else {
        return ((j / i) * 100).toFixed(2) + '%';
      }

    } else {
      return '';
    }
  }

  tableN(l, m) {
    if (!this.data.isAllNull(l, m)) {
      if (l === 0 || l === null || m === null) {
        return '';
      } else {
        return (((l - m) / l) * 100).toFixed(2) + '%';
      }
    } else {
      return '';
    }
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

  keyup() {
    return this.data.keyup();
  }

}
