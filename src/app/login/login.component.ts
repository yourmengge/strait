import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { Response } from '@angular/http';
import { ApiService } from '../api.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  phone: string;
  phoneError: boolean;
  loginCode: string;
  codeError: boolean;
  codeTip: string;
  public header = {
    'Authorization': ''
  };
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.phone = '';
    this.loginCode = '';
  }

  ngOnInit() {
  }

  verify(type) {
    if (type === 'phone') {
      this.phoneError = this.data.verifyPhone(this.phone) ? this.staticData.hide : this.staticData.show;
      return this.phoneError;
    } else if (type === 'code') {
      this.codeError = (this.loginCode !== '') ? this.staticData.hide : this.staticData.show;
      return this.codeError;
    }
  }


  /**
   * 登录
   */
  login() {
    if (!this.verify('phone') && !this.verify('code')) {
      const req = {
        mobile: this.phone,
        password: Md5.hashStr(this.loginCode)
      };
      this.http.Login(req).subscribe((res: Response) => {
        this.data.token = res['resultInfo'];
        this.data.setSession('token', this.data.token);
        this.data.ErrorMsg('登录成功');
        this.data.setSession('dateType', 1);
        this.data.dateType = 1;
        this.data.goto('main');
      }, (err) => {
        this.data.error = err.error;
        this.data.isError();
      });
    }
  }

}
