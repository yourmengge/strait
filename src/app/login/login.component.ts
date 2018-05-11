import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Router } from '@angular/router';
import { StaticService } from '../static.service';
import { Response, RequestOptions, Headers } from '@angular/http';
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
  constructor(public staticData: StaticService, public router: Router, public data: DataService, public http: ApiService) {
    this.phone = '';
    this.loginCode = '';
    this.codeTip = '获取验证码';
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
   * 获取验证码
   */
  getLoginCode() {
    let second = 60;
    if (!this.verify('phone')) {
      const countDown = setInterval(() => {
        if (second !== 0) {
          this.codeTip = second + 'S';
          second--;
        } else {
          this.codeTip = '获取验证码';
          clearInterval(countDown);
        }
      }, 1000);
      // this.http.GetLoginCode(data).subscribe((res: Response) => {
      //   return res;
      // });
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
        const resData = res.json();
        this.header = {
          'Authorization': resData.resultInfo
        };
        const headers: Headers = new Headers(this.header);
        this.http.opts = new RequestOptions({ headers: headers });
        this.data.setSession('header', JSON.stringify(this.header));
        this.router.navigate(['main']);
      }, (error) => {
        alert(error.json()['resultInfo']);
      });
    }
  }

}
