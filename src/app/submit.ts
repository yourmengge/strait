import { DataService } from './data.service';
import { ApiService } from './api.service';
import { OnInit } from '@angular/core';
import { StaticService } from './static.service';

export class Submit implements OnInit {
    public data: DataService;
    public http: ApiService;
    public staticData: StaticService;
    isFreeNum = /^\-?\d{1,8}(\.\d{1,4})?$/;
    TabNum: any;
    tableData: any;
    show = true;
    hide = false;
    alertDiv = false;
    submit(data, month) {
        data.month = month;
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
        this.http.getTableDetail(this.data.projectId, this.TabNum).subscribe((res) => {

            if (!this.data.isNull(res)) {
                this.tableData = res;
                this.tableData.id = res['id'] || '';
            }
        }, (err) => {
            this.data.error = err.error;
            this.data.isError();
        });
    }

    ngOnInit() {
        this.getDetail();
    }

    verifyNum(num: string, name: string) {
        num = num.toString();
        if (this.isFreeNum.test(num)) {
            if (num.indexOf('.') > 0) {
                let second = num.split('.')[1];
                const first = num.split('.')[0];
                if (second.length === 1) {
                    second = second + '000';
                }
                if (second.length === 2) {
                    second = second + '00';
                }
                if (second.length === 3) {
                    second = second + '0';
                }

                if (second.length === 0) {
                    second = second + '0000';
                }
                num = first + '.' + second;
            } else {
                num = num + '.0000';
            }
            this.tableData[name] = num;
        } else {
            this.alertDiv = this.show;
            this.data.hideAlert();
        }
    }

    keyup() {
        return this.data.keyup();
    }
}
