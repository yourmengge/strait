import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Router } from '@angular/router';
import { StaticService } from '../static.service';
import { Response, RequestOptions, Headers } from '@angular/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tableData: StaticService['tableData']; // 简单粗暴的写法
  tableList = '';
  contractPriceType: any;
  projectName: any;
  bizType: any;
  payType: any;
  picBudgetStatus: any;
  picVerifyStatus: any;
  picBudgetStatusDis = true;
  picVerifyStatusDis = true;
  alertDiv: boolean;
  constructor(public staticData: StaticService, public router: Router, public data: DataService, public http: ApiService) {
    this.contractPriceType = this.staticData.contractPriceType;
    this.bizType = this.staticData.bizType;
    this.payType = this.staticData.payType;
    this.picBudgetStatus = this.staticData.picBudgetStatus;
    this.picVerifyStatus = this.staticData.picVerifyStatus;
    this.alertDiv = this.staticData.hide;
    this.tableData = this.staticData.tableData;
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.http.GetList({}).subscribe((res: Response) => {
      this.tableList = res.json();
      this.projectName = this.tableList[0]['value'];
      this.getTableData(this.tableList[0]['value']);
    }, (error) => {
      alert(error.json()['resultInfo']);
      window.history.go(-1);
    });
  }

  getTableData(id) {
    this.http.GetTableData(id).subscribe((res: Response) => {
      if (res['_body'] !== '') {
        this.tableData = res.json();
        this.picBudgetStatusChange();
        this.picVerifyStatusChange();
      } else {
        this.tableData = this.staticData.tableData;
        this.picBudgetStatusDis = true;
        this.picVerifyStatusDis = true;

      }
    }, (error) => {
      alert(error.json()['resultInfo']);
      window.history.go(-1);
    });
  }

  change() {
    this.getTableData(this.projectName);
  }

  picBudgetStatusChange() {
    if (this.tableData['picBudgetStatus'] + '' !== '0') {
      this.picBudgetStatusDis = true;
      this.tableData['picBudgetMemo'] = '';
    } else {
      this.picBudgetStatusDis = false;

    }
  }

  picVerifyStatusChange() {
    if (this.tableData['picVerifyStatus'] + '' !== '0') {
      this.picVerifyStatusDis = true;
      this.tableData['picVerifyMemo'] = '';
    } else {
      this.picVerifyStatusDis = false;

    }
  }

  submit() {
    this.tableData['tableId'] = this.projectName;
    this.http.SubmitTableData(this.tableData).subscribe((res: Response) => {
      console.log(res);
      this.getTableData(this.projectName);
      alert('提交成功');
      window.location.href = 'javascript: scroll(0, 0)';
    }, (error) => {
      alert(error.json()['resultInfo']);
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
      this.alertDiv = this.staticData.show;
      this.hideAlert();
    }
  }

  hideAlert() {
    setTimeout(() => {
      this.alertDiv = this.staticData.hide;
    }, 2000);
  }

  keyup() {
    const k = event['keyCode'];
    if (((k >= 48) && (k <= 57)) || k === 8 || ((k >= 96) && (k <= 105))) {// 限制输入数字

    } else {
      this.preventDefault();
    }
  }

  preventDefault() {
    if (window.event) {
      window.event.returnValue = false;
    } else {
      event.preventDefault(); // for firefox
    }
  }

  isDate(date) {
    if (this.data.isNotNull(date) && !this.staticData.isFormatDate.test(date)) {
      this.alertDiv = this.staticData.show;
      this.hideAlert();
    }

  }
}
