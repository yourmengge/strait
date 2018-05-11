import { Injectable } from '@angular/core';
import { StaticService } from './static.service';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DataService {

  constructor(public staticData: StaticService) {

  }

  hadHeader() {
    if (this.getSession('header') !== undefined) {
      const headers: Headers = new Headers(JSON.parse(this.getSession('header')));
      return new RequestOptions({ headers: headers });
    }
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

  isNotNull(string) {
    if (string === null || string === undefined || string === '') {
      return false;
    } else {
      return true;
    }
  }



}
