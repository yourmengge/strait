import { Component, DoCheck } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  alert = true;

  constructor(public data: DataService) {
    this.alert = this.data.alert;
  }
  ngDoCheck() {
    this.alert = this.data.alert;
  }
}
