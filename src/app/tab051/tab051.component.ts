import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jfjl',
  templateUrl: './tab051.component.html',
  styleUrls: ['./tab051.component.css']
})
export class TAB051Component implements OnInit {
  tableData: any; // 简单粗暴的写法
  contractPriceType: any;
  optionsValue: any; // 下拉框中的id
  bizType: any;
  payType: any;
  picBudgetStatus: any;
  picVerifyStatus: any;
  picBudgetStatusDis = true;
  picVerifyStatusDis = true;
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.contractPriceType = this.staticData.contractPriceType;
    this.bizType = this.staticData.bizType;
    this.payType = this.staticData.payType;
    this.picBudgetStatus = this.staticData.picBudgetStatus;
    this.picVerifyStatus = this.staticData.picVerifyStatus;

    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      n: '',
      o: '1',
      p: '',
      q: '1',
      r: '',
      s: '',
      t: '',
      u: '',
      v: '',
      z: '',
      aa: '',
      ab: '',
      ac: '',
      ad: '',
      ae: '',
      af: '',
      ag: '',
      ah: '',
      ai: '',
      aj: '',
      ak: '',
      al: '',
      am: '',
      an: '',
      ao: '',
      ap: '',
      aq: '',
      ar: '',
      as1: ''
    };
  }

  ngOnInit() {
    this.getDetail();
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

  picBudgetStatusChange() {
    if (this.tableData.o + '' !== '0') {
      this.picBudgetStatusDis = true;
      this.tableData['p'] = '';
    } else {
      this.picBudgetStatusDis = false;

    }
  }

  picVerifyStatusChange() {
    if (this.tableData.q + '' !== '0') {
      this.picVerifyStatusDis = true;
      this.tableData.r = '';
    } else {
      this.picVerifyStatusDis = false;

    }
  }

  keyup() {
    return this.data.keyup();
  }


  getDetail() {
    this.http.getTableDetail(this.data.projectId, 'TAB051').subscribe((res) => {
      console.log(res);
      if (!this.data.isNull(res)) {
        this.tableData.n = res['n'];
        this.tableData.o = res['o'];
        this.tableData.p = res['p'];
        this.tableData.q = res['q'];
        this.tableData.r = res['r'];
        this.tableData.s = res['s'];
        this.tableData.t = res['t'];
        this.tableData.u = res['u'];
        this.tableData.v = res['v'];
        this.tableData.z = res['z'];
        this.tableData.aa = res['aa'];
        this.tableData.ab = res['ab'];
        this.tableData.ac = res['ac'];
        this.tableData.ad = res['ad'];
        this.tableData.ae = res['ae'];
        this.tableData.af = res['af'];
        this.tableData.ag = res['ag'];
        this.tableData.ah = res['ah'];
        this.tableData.ai = res['ai'];
        this.tableData.aj = res['aj'];
        this.tableData.ak = res['ak'];
        this.tableData.al = res['al'];
        this.tableData.am = res['am'];
        this.tableData.an = res['an'];
        this.tableData.ao = res['ao'];
        this.tableData.ap = res['ap'];
        this.tableData.aq = res['aq'];
        this.tableData.ar = res['ar'];
        this.tableData.as1 = res['as1'];
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  submit() {
    this.http.postTableDetail(this.tableData, 'TAB051').subscribe((res) => {
      console.log(res);
      this.data.ErrorMsg('提交成功！');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }
}
