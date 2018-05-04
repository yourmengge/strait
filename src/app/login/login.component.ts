import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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

  constructor(public data: DataService) {
    this.loginCode = '';
    this.phone = '';
  }

  ngOnInit() {
  }

  verify(type) {
    if (type === 'phone') {
      this.phoneError = this.data.verifyPhone(this.phone) ? this.data.hide : this.data.show;
    } else if (type === 'code') {
      console.log(this.loginCode);
      this.codeError = this.loginCode !== '' ? this.data.hide : this.data.show;
    }
  }

  getLoginCode() {
    this.verify('phone');
  }

  login() {
    // this.verify('phone');
    this.verify('code');
  }

}
