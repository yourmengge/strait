import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticService } from './static.service';
import { DataService } from './data.service';

@Injectable()
export class ApiService {
  host = this.staticData.host;
  pageSize = 200;
  constructor(public http: HttpClient, public staticData: StaticService, public data: DataService) {
  }

  POST(url, data) {
    this.data.getHeader();
    return this.http.post(this.host + url, data, this.data.getHeader());
  }

  Login(data) {
    return this.http.post(this.staticData.host + '/third/login', data);
  }

  Projects() {
    return this.POST('third/projects', {});
  }

  TableList(id) {
    return this.POST('third/projects/' + id + '/table', {});
  }

  tableDetail(data) {
    return this.POST('third/project/' + data.projectId + '/' + data.alias + '?pageNo=' + data.pageNo + '&pageSize='
      + this.pageSize + (data.type === undefined ? '' : ('&type=' + data.type)), {});
  }

  postTableDetail(data, tableId) {
    return this.POST('third/' + tableId, data);
  }

  getTableDetail(projectId, tableId) {
    return this.POST('third/project/' + projectId + '/' + tableId + '/month', {});
  }

  getProjectDetail(projectId) {
    return this.POST('third/project/' + projectId, {});
  }

  postProjectDetail(data) {
    return this.POST('third/project', data);
  }
}
