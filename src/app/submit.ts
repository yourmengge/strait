import { DataService } from './data.service';
import { ApiService } from './api.service';
import { StaticService } from './static.service';
import { OnInit } from '@angular/core';

export class Submit implements OnInit {
    isFreeNum = /^\-?\d{1,8}(\.\d{1,4})?$/;
    TabNum: any;
    tableData: any;
    dateFormat: any;
    constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {

    }

    ngOnInit() {
        if (!this.data.isNull(this.data.projectId)) {
            this.getDetail();
        }

    }


    submit() {
        if (this.data.submitCycle === 1) {
            this.tableData.month = this.data.getJD();
        } else {
            this.tableData.month = this.data.month();
        }
        this.tableData.projectId = this.data.projectId;
        this.http.postTableDetail(this.tableData, this.TabNum).subscribe((res) => {
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
            this.afterGetDetail();
        }, (err) => {
            this.data.error = err.error;
            this.data.isError();
        });
    }

    afterGetDetail() {
    }

    beforeSubmit() {
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
            this.staticData.alertDiv = this.staticData.show;
            this.data.hideAlert();
        }
    }

    keyup() {
        return this.data.keyup();
    }
}
