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
    return this.POST(`third/projects/${id}/table`, {});
  }

  /**
   * 获取预览图片
   */
  getThumbnail(name) {
    return this.POST(`third/oss/visit?key=${name}`, {});
  }

  /**
   * 获取oss token
   */
  getOssToken() {
    return this.POST('third/oss/sts', {});
  }
  /**
   * 台账
   * @param data
   */
  tableDetail(data) {
    return this.POST(`third/list/${data.projectId}/${data.alias}/${this.data.selectMonth}
    ?pageNo=${data.pageNo}&pageSize=${this.pageSize}${(data.type === undefined ? '' : ('&type=' + data.type))}`, {});
  }

  postTableDetail(data, tableId) {
    return this.POST(`third/${tableId}`, data);
  }

  getTableDetail(projectId, tableId) {
    return this.POST(`third/rpt/${projectId}/${tableId}/${this.data.selectMonth}`, {});
  }

  getTableDetailProject(projectId, tableId) {
    return this.POST(`third/${tableId}/${projectId}`, {});
  }

  getProjectDetail(projectId) {
    return this.POST(`third/project/${projectId}`, {});
  }

  postProjectDetail(data) {
    return this.POST('third/project', data);
  }



  export(projectId, tabId) {
    this.data.getExportHeader();
    return this.http.post(this.host + `third/export/${projectId}/${tabId}/${this.data.selectMonth}`, {}
      , { headers: this.data.getExportHeader(), responseType: 'arraybuffer' });
  }
}
