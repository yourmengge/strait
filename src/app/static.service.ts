import { Injectable } from '@angular/core';

@Injectable()
export class StaticService {
  show: boolean;
  hide: boolean;
  alertDiv: boolean;
  isPhone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  isFreeNum = /^\-?\d{1,8}(\.\d{1,4})?$/;
  isFormatDate = /^\d{8}/;
  // host = 'http://192.168.1.104:8082/zjhx/';
  host = 'http://101.37.85.69:8081/zjhx/';
  // host = 'http://218.85.23.217:8082/zjhx/';
  // host = 'http://192.168.88.148:8080/zjhx/';
  tableData = {

  };
  constructor() {
    this.show = true;
    this.hide = false;
  }

  contractPriceType = [{
    id: 1,
    name: '定额计价'
  }, {
    id: 2,
    name: '清单计价'
  }, {
    id: 3,
    name: '总价'
  }, {
    id: 9,
    name: '其他'
  }];

  bizType = [{
    id: 1,
    name: '自营'
  }, {
    id: 2,
    name: '合作'
  }];

  payType = [{
    id: 1,
    name: '月'
  }, {
    id: 2,
    name: '节点'
  }];

  picBudgetStatus = [{
    id: 1,
    name: '正在编制'
  }, {
    id: 0,
    name: '未编制'
  }, {
    id: 2,
    name: '已编制'
  }];

  picVerifyStatus = [{
    id: 1,
    name: '正在核对'
  }, {
    id: 0,
    name: '未核对'
  }, {
    id: 2,
    name: '已核对'
  }];

}
export interface Yswspb {
  i: string;
  j: string;
  k: string;
}
