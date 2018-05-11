import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { StaticService } from './static.service';
import { DataService } from './data.service';

@Injectable()
export class ApiService {
  public opts: any = '';
  constructor(public http: Http, public staticData: StaticService, public data: DataService) {
    this.opts = this.data.hadHeader();
  }

  /**
  * @param {phone:""}
  * 传入手机号码，获取验证码
  */
  GetLoginCode(data) {
    return this.http.post(this.staticData.host, data);
  }

  Login(data) {
    return this.http.post(this.staticData.host + '/third/login', data);
  }

  GetList(data) {
    return this.http.post(this.staticData.host + '/third/tableList', data, this.opts);
  }

  GetTableData(id) {
    return this.http.post(this.staticData.host + '/third/tableDetail/' + id, { '': '' }, this.opts);
  }

  SubmitTableData(data) {
    return this.http.post(this.staticData.host + '/third/tableDetail', data, this.opts);
  }

}
