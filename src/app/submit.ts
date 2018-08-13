import { DataService } from './data.service';
import { ApiService } from './api.service';
import { StaticService } from './static.service';
import { OnInit, OnDestroy } from '@angular/core';
import { DateFormat } from './date-format';
import { Subscription } from 'rxjs/Subscription';

export class Submit implements OnInit, OnDestroy {
    isFreeNum = /^\-?\d{1,8}(\.\d{1,4})?$/;
    TabNum: any;
    tableData: any;
    dateFormat: DateFormat;
    client: any;
    fileList = [];
    docList = [];
    imgList = [];
    selectMonth = '';
    cycleList = [];

    title: string;
    subscription: Subscription;

    constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
        this.dateFormat = new DateFormat();
        this.subscription = this.data.titleObservable.subscribe(src => {
            if (this.data.getUrl(2) === this.TabNum) {
                this.getDetail();
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        if (!this.data.isNull(this.data.selectMonth)) {
            this.getDetail();
        } else {
            setTimeout(() => {
                this.ngOnInit();
            }, 1000);
        }

        this.needOSS();
    }
    getFileName(type, name) {
        let fileName = '';
        if (this.staticData.isPhoto.test(type)) {
            fileName = this.data.randomJPGName();
        } else {
            fileName = name.split('.')[0] + this.dateFormat.formatDate(new Date(), 'hhmmss');
        }
        return this.TabNum + '/' + this.dateFormat.formatDate(new Date(), 'yyyyMMdd')
            + '/' + fileName + '.' + type;
    }

    needOSS() {

    }

    getOssToken() {
        this.http.getOssToken().subscribe(res => {
            this.client = new OSS.Wrapper({
                region: 'oss-cn-shenzhen',
                accessKeyId: res['accessKeyId'],
                accessKeySecret: res['accessKeySecret'],
                bucket: res['bucketName'],
                stsToken: res['securityToken'],
                secure: true
            });
        });
    }

    uploadFile(e) {
        for (const i of e.target.files) {
            this.uploadToOss(i);
        }
    }

    async uploadToOss(file) {
        try {
            const result = await this.client.multipartUpload(this.getFileName(this.data.getSuffixName(file.name), file.name), file);
            this.fileList.push(result.name);
            this.http.getThumbnail(result.name).subscribe(res => {
                if (this.staticData.isPhoto.test(res['key'])) {
                    this.imgList.push(res);
                } else {
                    this.docList.push(res);
                }

            });
        } catch (e) {
            console.error(e);
        }
    }

    initImgList() {
        this.imgList = [];
        this.fileList = [];
        this.docList = [];
        if (!this.data.isNull(this.tableData.fileList)) {
            this.tableData.fileList.forEach(element => {
                if (this.staticData.isPhoto.test(element.key)) {
                    this.imgList.push(element);
                } else {
                    this.docList.push(element);
                }
                this.fileList.push(element.key);
            });
        }
    }

    openImg(path) {
        window.open(path);
    }

    downLoad(path) {
        window.open(path);
    }

    del(data, index) {
        this.imgList.splice(index, 1);
        const i = this.fileList.indexOf(data.key);
        this.fileList.splice(i, 1);
    }

    delete(data, index) {
        this.docList.splice(index, 1);
        const i = this.fileList.indexOf(data.key);
        this.fileList.splice(i, 1);
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

    submit() {
        this.beforeSubmit();
        if (this.data.submitCycle === 1 || this.data.submitCycle === '1') {
            this.tableData.month = this.data.getJD();
        } else {
            this.tableData.month = this.data.month();
        }
        this.tableData.projectId = this.data.projectId;
        this.http.postTableDetail(this.tableData, this.TabNum).subscribe(() => {
            this.getDetail();
            this.data.ErrorMsg('提交成功！');
        }, (err) => {
            this.data.error = err.error;
            this.data.isError();
        });
    }

    beforeGetDetail() {

    }

    getDetail() {
        this.beforeGetDetail();
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
}
