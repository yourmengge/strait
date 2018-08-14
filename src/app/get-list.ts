import { DataService } from './data.service';
import { ApiService } from './api.service';
import { StaticService } from './static.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export class GetList implements OnInit, OnDestroy {
    TabNum: any;
    state = 'inactive';
    list: any;
    detail: any;

    subscription: Subscription;
    constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
        this.subscription = this.data.titleObservable.subscribe(src => {
            if (this.data.getUrl(2) === this.TabNum) {
                this.getDetail();
            }
        });
    }

    initData() {

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        if (!this.data.isNull(this.data.projectId)) {
            if (!this.data.isNull(this.data.selectMonth)) {
                this.getDetail();
            } else {
                setTimeout(() => {
                    this.ngOnInit();
                }, 1000);
            }

        }
    }

    change() {
        console.log(this.list);
    }

    submit() {
        if (this.state === 'active') {
            this.detail.month = this.data.selectMonth;
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
    }

    getDetail() {
        const data = {
            projectId: this.data.projectId,
            alias: this.TabNum,
            pageNo: 1
        };
        this.http.tableDetail(data).subscribe((res) => {
            this.list = res['rows'];

            if (res['rows'].length !== 0) {
                this.data.emitTitle2(true);
            } else {
                this.data.emitTitle2(false);
            }
        }, (err) => {
            this.data.error = err.error;
            this.data.isError();
        });
    }

    add() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
        if (this.state === 'active') {
            this.initData();
        }
    }
}
