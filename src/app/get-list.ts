import { DataService } from './data.service';
import { ApiService } from './api.service';
import { StaticService } from './static.service';
import { OnInit } from '@angular/core';

export class GetList implements OnInit {
    TabNum: any;
    state = 'inactive';
    list: any;
    detail: any;
    constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    }

    initData() {

    }

    ngOnInit() {
        this.getDetail();
    }

    submit() {
        this.detail.month = this.data.month();
        this.detail.projectId = this.data.projectId;
        this.http.postTableDetail(this.detail, this.TabNum).subscribe((res) => {
            this.getDetail();
            this.data.ErrorMsg('提交成功！');
            this.initData();
        }, (err) => {
            this.data.error = err.error;
            this.data.isError();
        });
    }

    getDetail() {
        const data = {
            projectId: this.data.projectId,
            alias: this.TabNum,
            pageNo: 1
        };
        this.http.tableDetail(data).subscribe((res) => {
            this.list = res['rows'];
        }, (err) => {
            this.data.error = err.error;
            this.data.isError();
        });
    }

    add() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
