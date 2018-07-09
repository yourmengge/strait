import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements DoCheck, OnInit {
  projectList: any;
  projectValue: any;
  dateType: number;
  tableList: any;
  tableValue: any;
  showTableList: any;
  url: any;
  hasProject = this.staticData.hide;
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.dateType = this.data.dateType;
    this.data.setSession('dateType', this.dateType);
  }

  ngDoCheck() {

  }

  ngOnInit() {
    this.getList();
    this.url = this.data.getUrl(2);
  }

  getList() {
    this.http.Projects().subscribe((res) => {
      this.projectList = res;
      if (!this.data.isNull(this.data.getSession('projectId'))) {
        this.projectValue = this.data.getSession('projectId');
      } else {
        this.projectValue = this.projectList[0].value;
      }

      this.data.projectId = this.projectValue;
      this.data.setSession('projectId', this.projectValue);
      this.getTableList(this.projectValue);
      if (this.projectList.length !== 0) {
        this.hasProject = true;
      } else {
        this.hasProject = false;
      }
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  getTableList(id) {
    this.http.TableList(id).subscribe((res) => {
      this.tableList = res;
      this.showTableList = this.typeOfTableList(this.dateType);
      // this.tableValue = this.showTableList[0].alias;
      this.tableValue = this.url;
      this.change();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  typeOfTableList(type) {
    const array = [];
    this.tableList.forEach(element => {
      // tslint:disable-next-line:triple-equals
      if (type == element.submitType) {
        array.push(element);
      }
    });
    this.tableValue = array[0].alias;
    return array;
  }


  changeProject() {
    this.getTableList(this.projectValue);
    this.data.setSession('projectId', this.projectValue);
  }

  change() {
    this.data.projectId = this.projectValue;
    this.data.goto('main/' + this.tableValue);
  }

  changeType() {
    this.showTableList = this.typeOfTableList(this.dateType);
    this.data.setSession('dateType', this.dateType);
    this.change();
  }
}
