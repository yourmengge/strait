import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Router } from '@angular/router';
import { StaticService } from '../static.service';

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

  constructor(public staticData: StaticService, public router: Router, public data: DataService) {

  }

  ngOnInit() {
  }

  verify(type) {
    if (type === 'phone') {
      this.phoneError = this.data.verifyPhone(this.phone) ? this.staticData.hide : this.staticData.show;
    } else if (type === 'code') {
      console.log(this.loginCode);
      this.codeError = (this.loginCode !== '' && this.loginCode !== undefined) ? this.staticData.hide : this.staticData.show;
    }
  }

  getLoginCode() {
    this.verify('phone');
  }

  login() {
    this.verify('phone');
    this.verify('code');
    // this.router.navigate(['main']);
  }

}
