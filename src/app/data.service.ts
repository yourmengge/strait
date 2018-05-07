import { Injectable } from '@angular/core';
import { StaticService } from './static.service';

@Injectable()
export class DataService {

  constructor(public staticData: StaticService) {

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



}
