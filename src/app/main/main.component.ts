import { Component, OnInit, DoCheck } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DataService } from '../data.service';
import { StaticService } from '../static.service';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        display: 'none'
      })),
      state('active', style({
        display: 'block'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class MainComponent implements DoCheck, OnInit {
  projectList: any;
  projectValue: any;
  dateType: number;
  tableList: any;
  tableValue: any;
  showTableList: any;
  tabName: any;
  url: any;
  state = 'inactive';
  selectMonth: any;
  hasProject = this.staticData.hide;
  dateList = [];
  refresh = true;
  tableData: any;
  submitCycle: any;
  cycleList = [];
  exportBtn: any;
  subscription: Subscription;
  constructor(public staticData: StaticService, public data: DataService, public http: ApiService) {
    this.dateType = this.data.dateType;
    this.initData();
    this.data.setSession('dateType', this.dateType);
    this.subscription = this.data.titleObservable2.subscribe(src => {
      if (src) {
        this.exportBtn = true;
      } else {
        this.exportBtn = false;
      }
    });
  }

  ngDoCheck() {

  }

  ngOnInit() {
    this.getList();
    this.url = this.data.getUrl(2);
  }

  initData() {
    this.tableData = {
      'id': '',
      'bizType': 1,
      'buildArea': '',
      'ctAmount': '',
      'ctCurrentRiskLevel': '',
      'ctInitialRiskLevel': '',
      'ctNo': '',
      'ctPriceForm': 1,
      'ctQualityLevel': '',
      'ctSignDate': '',
      'ctStartDate': '',
      'ctTotalDays': '',
      'examineLevel': 1,
      'expectComplteDate': '',
      'expectTotalDays': '',
      'frame': '',
      'isBigCustomer': 1,
      'layer': '',
      'mainRisk': '',
      'mainSettleDate': '',
      'manageMode': 1,
      'ownerName': '',
      'ownerNature': '政府',
      'payMode': 1,
      'picBudgetCheckMemo': '',
      'picBudgetCheckStatus': 0,
      'picProgramMemo': '',
      'picProgramStatus': 0,
      'planClaimAmount': '',
      'planClaimDays': '',
      'ctEndDate': '',
      'prePay': '',
      'progressDesc': '',
      'projectAddress': '',
      'projectCode': '',
      'projectName': '',
      'projectStatus': 1,
      'projectType': '',
      'realCompleteDate': '',
      'realStartDate': '',
      'receivePicDate': '',
      'signLevel': 1,
      'undertakeMode': 1
    };
  }

  postDetail() {
    this.tableData['id'] = this.projectValue;
    this.http.postProjectDetail(this.tableData).subscribe(() => {
      this.data.ErrorMsg('提交成功');
      this.getDetail();
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  getDetail() {
    this.http.getProjectDetail(this.projectValue).subscribe((res) => {
      this.tableData = res;
      this.tableData.progressDesc = res['progressDesc'] || '基础   %；主体    %；装修   %；安装    %；其他: ';
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }

  add() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.getDetail();
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
      this.refresh = true;
      this.getTableList(this.projectValue);
      this.getDetail();
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
      this.dateTypeList();
      if (this.refresh) {
        this.dateType = this.data.dateType;
      } else {
        this.dateType = this.dateList[0].id;
      }
      this.showTableList = this.typeOfTableList(this.dateType);
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }
  /**
   * 获取时间分类
   */
  dateTypeList() {
    this.dateList = [];
    let jidu = false;
    let yuefen = false;
    let taizhang = false;
    this.tableList.forEach(element => {
      if (element.submitType === 1) {
        jidu = true;
      } else if (element.submitType === 2) {
        yuefen = true;
      } else {
        taizhang = true;
      }
    });
    if (jidu) {
      this.dateList.push({ id: 1, name: '季度' });
    }
    if (yuefen) {
      this.dateList.push({ id: 2, name: '月份' });
    }
    if (taizhang) {
      this.dateList.push({ id: 4, name: '台账' });
    }
  }
  /**
   * 获取当前时间分类下的表格列表
   * @param type 时间类型
   */
  typeOfTableList(type) {
    const array = [];
    this.tableList.forEach(element => {
      // tslint:disable-next-line:triple-equals
      if (type == element.submitType) {
        array.push(element);
      }
    });
    if (this.refresh) {
      if (!this.data.isNull(this.data.getUrl(2))) {
        this.tableValue = this.data.getUrl(2);
        this.data.submitCycle = array[0].submitCycle;
        this.tabName = array[0].tableName;
        this.getMonth(array[0]);
      } else {
        this.tableValue = array[0].alias;
        this.data.submitCycle = array[0].submitCycle;
        this.tabName = array[0].tableName;
        this.getMonth(array[0]);
        this.data.goto('main/' + this.tableValue);
      }
    } else {
      this.tableValue = array[0].alias;
      this.data.submitCycle = array[0].submitCycle;
      this.getMonth(array[0]);
      this.data.goto('main/' + this.tableValue);
    }
    return array;
  }

  /**
   * 获取季度或月份列表
   */
  getMonth(array) {
    this.cycleList = this.initMonth(array.cycleList.split(','));
    this.selectMonth = this.cycleList[0];
    this.data.selectMonth = this.selectMonth.replace(/[^0-9]/ig, '');
  }

  /**
   * 初始化表格月份或季度
   */
  initMonth(array) {
    const data = [];
    if (this.data.submitCycle === 1) { // 表示季度
      array.forEach(element => {
        data.push(element.substring(0, 4) + '年第' + element.substr(4, 2) + '季度');
      });
      return data;
    } else { // 表示月份
      array.forEach(element => {
        data.push(element.split('-')[0] + '年' + element.split('-')[1] + '月份');
      });
      return data;
    }
  }

  changeMonth() {
    this.data.selectMonth = this.selectMonth.replace(/[^0-9]/ig, '');
    this.data.emitTitle('角色列表');
  }

  /**
   * 选择项目
   */
  changeProject() {
    this.refresh = false;
    this.getTableList(this.projectValue);
    this.getDetail();
    this.data.setSession('projectId', this.projectValue);
  }

  /**
   * 选择表格
   */
  change() {
    this.data.projectId = this.projectValue;
    for (const i of this.showTableList) {
      if (this.tableValue === i.alias) {
        this.data.submitCycle = i.submitCycle;
        this.data.setSession('submitCycle', this.data.submitCycle);
        this.data.submitCycle = i.submitCycle;
        this.tabName = i.tableName;
        this.getMonth(i);
      }
    }
    this.data.goto('main/' + this.tableValue);

  }

  /**
   * 选择时间
   */
  changeType() {
    this.refresh = false;
    this.showTableList = this.typeOfTableList(this.dateType);
    this.data.setSession('dateType', this.dateType);
    this.change();
  }

  export() {
    this.http.export(this.data.projectId, this.data.getUrl(2)).subscribe((res) => {
      let type = '.xls';
      if (this.data.getUrl(2) === 'TAB101' || this.data.getUrl(2) === 'TAB121') {
        type = '.doc';
      } else {
        type = '.xls';
      }
      this.data.downloadFile(res, this.selectMonth + this.tabName, type);
    }, (err) => {
      this.data.error = err.error;
      this.data.isError();
    });
  }
}
