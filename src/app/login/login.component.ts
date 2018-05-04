import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Router } from '@angular/router';

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

  constructor(public data: DataService, public router: Router) {

  }

  ngOnInit() {
  }

  verify(type) {
    if (type === 'phone') {
      this.phoneError = this.data.verifyPhone(this.phone) ? this.data.hide : this.data.show;
    } else if (type === 'code') {
      console.log(this.loginCode);
      this.codeError = (this.loginCode !== '' && this.loginCode !== undefined) ? this.data.hide : this.data.show;
    }
  }

  getLoginCode() {
    this.verify('phone');
  }

  login() {
    this.verify('phone');
    this.verify('code');
    this.router.navigate(['main']);
  }

}
