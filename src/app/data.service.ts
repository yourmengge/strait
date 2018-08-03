import { Injectable } from '@angular/core';
import { StaticService } from './static.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
  alert: boolean;
  show = true;
  hide = false;
  token: string;
  error: Error;
  errMsg = '出错啦';
  projectId: any;
  dateType: any;
  tableValue: any;
  submitCycle: any;
  constructor(public staticData: StaticService, public router: Router) {
    this.alert = this.hide;
    this.projectId = this.getSession('projectId');
    this.dateType = this.getSession('dateType');
    this.tableValue = this.getSession('tableId');
  }

  randomJPGName() {
    let name = '';
    for (let i = 0; i < 32; i++) {
      name += this.staticData.random[Math.floor(Math.random() * 52)];
    }
    return name + '.jpg';
  }

  public getSession(name): any {
    return sessionStorage.getItem(name);
  }
  setSession(name, data) {
    return sessionStorage.setItem(name, data);
  }

  verifyPhone(phone) {
    return this.staticData.isPhone.test(phone);
  }

  /**
   * 请求出错提示
   */
  isError() {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 2000);
    this.errMsg = this.error.resultInfo;
    if (this.error.resultCode === 'token.error') {
      this.removeSession('token');
      this.goto('/');
    }
  }
  /**
   * 获取季度
   */
  getJD() {
    const year = new Date().getFullYear() + '';
    const month = new Date().getMonth() + 1 + '';
    if (month === '1' || month === '2' || month === '3') {
      return year + this.add0(1);
    }
    if (month === '4' || month === '5' || month === '6') {
      return year + this.add0(2);
    }
    if (month === '7' || month === '8' || month === '9') {
      return year + this.add0(3);
    }
    if (month === '10' || month === '11' || month === '12') {
      return year + this.add0(4);
    }
  }

  /**
   * 判断大于等于0小于等于1
   */
  isFormat(num: number) {
    if (num >= 0 && num <= 1) {
      return true;
    } else {
      return false;
    }
  }

  /**
 * 输入出错提示
 */
  ErrorMsg(desc) {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 2000);
    this.errMsg = desc;
  }

  ErrorMsg2(desc) {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 2000);
    this.errMsg = desc + '必须大于等于0且小于等于1';
  }

  removeSession(name) {
    return sessionStorage.removeItem(name);
  }


  hideAlert() {
    setTimeout(() => {
      this.staticData.alertDiv = this.staticData.hide;
    }, 2000);
  }

  keyup() {
    const k = event['keyCode'];
    if (((k >= 48) && (k <= 57)) || k === 8 || ((k >= 96) && (k <= 105)) || k === 110 || k === 190) {// 限制输入数字

    } else {
      this.preventDefault();
    }
  }

  getUrl(num) {
    return window.location.hash.split('/')[num];
  }

  add0(num) {
    return num < 10 ? '0' + num : num;
  }

  month() {
    const date = new Date();
    return date.getFullYear() + '' + this.add0(date.getMonth() + 1);
  }

  preventDefault() {
    if (window.event) {
      window.event.returnValue = false;
    } else {
      event.preventDefault(); // for firefox
    }
  }

  isDate(date) {
    if (!this.isNull(date) && !this.staticData.isFormatDate.test(date)) {
      this.staticData.alertDiv = this.staticData.show;
      this.hideAlert();
    }
  }

  /**
 * 页面跳转
 */
  goto(url) {
    return this.router.navigate([url]);
  }

  /**
 * 判断是否为空
 */
  isNull(string) {
    // tslint:disable-next-line:max-line-length
    return (string === NaN || string === 'NaN' || string === 'undefined' || string === '' || string === null || string === 'null' || string === undefined || string === 'NaN') ? true : false;
  }

  /**
   * 获取头部
   */
  getHeader() {
    if (this.isNull(this.token)) {
      if (this.isNull(this.getSession('token'))) {
        this.goto('/login');
        return;
      } else {
        this.token = this.getSession('token');
        return { headers: new HttpHeaders({ 'Authorization': this.getSession('token') }) };
      }

    } else {
      return { headers: new HttpHeaders({ 'Authorization': this.token }) };
    }
  }

  /**
   * 判断两个参数是否都有值
   */
  isAllNull(x: number, ...y: number[]) {
    let temp = false;
    if (this.isNull(x)) {
      temp = true;
      return temp;
    }

    y.forEach(element => {
      if (this.isNull(element)) {
        temp = true;
        return temp;
      }
    });

    return temp;
  }

  addNum(x, y, type) {
    if (!this.isAllNull(x, y)) {
      if (type === '+') {
        return (x + y).toFixed(4);
      } else if (type === '-') {
        return (x - y).toFixed(4);
      }

    } else {
      return '';
    }
  }

}
export interface Error {
  resultCode: string;
  resultInfo: string;
  success: boolean;
}
