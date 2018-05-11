import { Injectable } from '@angular/core';

@Injectable()
export class StaticService {
  show: boolean;
  hide: boolean;
  isPhone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  isFreeNum = /^\d{1,8}(\.\d{1,4})?$/;
  isFormatDate = /^\d{8}/;
  host = 'http://218.85.23.217:8082/zjhx/';
  // host = 'http://192.168.88.148:8080/zjhx/';
  tableData = {
    id: '',
    tableId: '',
    projectName: '',
    contractFee: '',
    owner: '',
    projectAddress: '',
    bizType: 1,
    contractPriceType: 1,
    payType: 1,
    payRatio: '',
    contractStartDate: '',
    actualStartDate: '',
    planEndDate: '',
    receivePicDate: '',
    picBudgetStatus: 1,
    picBudgetMemo: '',
    picVerifyStatus: 1,
    picVerifyMemo: '',
    biProgressDesc: '',
    biActualValue: '',
    biActualValueExclTax: '',
    biActualValueTax: '',
    biMainBizIncome: '',
    biMainBizIncomeTax: '',
    biProjectSettleSubject: '',
    biActualValueExclTaxStart: '',
    biActualValueTaxStart: '',
    ownerReplyAmount: '',
    ownerReplyAmountExclTax: '',
    ownerReplyAmountTax: '',
    ownerReplyAmountExclTax2: '',
    ownerReplyAmountTax2: '',
    contractReceivable: '',
    receivedAmount: '',
    projectPayed: '',
    capitalOccupyFee: '',
    applyAimValueYear: '',
    applyAimValueStart: '',
    unreaachValue: '',
    sendYear: '',
    replyYear: '',
    sendStart: '',
    replayStart: '',
    costMonth: '',
    costStart: '',
    bizMgr: '',
    bizMgrTel: ''
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
