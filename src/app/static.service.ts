import { Injectable } from '@angular/core';

@Injectable()
export class StaticService {
  show: boolean;
  hide: boolean;
  isPhone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  host = 'https://www.123.com';
  constructor() {
    this.show = true;
    this.hide = false;
  }

}
