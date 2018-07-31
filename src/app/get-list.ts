import { DataService } from './data.service';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';

export class GetList implements OnInit {
    public data: DataService;
    public http: ApiService;
    TabNum: any;
    tableData: any;
    state = 'inactive';
    list: any;
    submit(data) {
        data.month = this.data.month();
        data.projectId = this.data.projectId;
        this.http.postTableDetail(data, this.TabNum).subscribe((res) => {
            this.getDetail();
            this.data.ErrorMsg('提交成功！');
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

    ngOnInit() {
        this.getDetail();
    }

    add() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
