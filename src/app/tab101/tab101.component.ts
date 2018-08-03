import { Component } from '@angular/core';
import { Submit } from '../submit';
import { DataService } from '../data.service';
import { ApiService } from '../api.service';
import { StaticService } from '../static.service';
import { DateFormat } from '../date-format';

@Component({
  selector: 'app-tab101',
  templateUrl: './tab101.component.html',
  styleUrls: ['./tab101.component.css']
})
export class Tab101Component extends Submit {
  dateFormat: DateFormat;
  days31: number;
  days32: any;
  days34: any;
  constructor(public data: DataService, public http: ApiService, public staticData: StaticService) {
    super(data, http, staticData);
    this.dateFormat = new DateFormat();
    this.TabNum = 'TAB101';
    this.initData();
  }

  afterGetDetail() {
    if (this.tableData.days31 < 0) {
      this.days31 = -1;
      this.days34 = Math.abs(this.tableData.days31);
    } else if (this.tableData.days31 > 0) {
      this.days31 = 1;
      this.days32 = this.tableData.days31;
    } else {
      this.days31 = 0;
      this.days32 = '';
      this.days34 = '';
    }
  }

  pay51(a, b, c) {
    if (!this.data.isAllNull(a, b, c)) {
      const num = (parseFloat(this.chu(a, b)) - c);
      if (num < 0) {
        return '少 ' + Math.abs(num) + '%';
      } else if (num === 0) {
        return '正常';
      } else {
        return '超 ' + num + '%';
      }
    }
  }

  pay61(a, b) {
    const num = this.jian(a, b);
    if (num < 0) {
      return '少 ' + Math.abs(num) + '万元';
    } else if (num === 0) {
      return '正常';
    } else {
      return '超 ' + num + '万元';
    }
  }


  /**
   * 调整后竣工日期
   */
  tzhjgrq(a, b) {
    if (!this.data.isAllNull(a, b)) {
      return this.dateFormat.formatDate(new Date(new Date(a).getTime() + b * 86400000), 'yyyy/MM/dd');
    }
  }

  initData() {
    this.tableData = {
      projectId: this.data.projectId,
      month: this.data.month(),
      ct11: '',
      ct12: '',
      ct21: '',
      ct22: '',
      ct31: '',
      ct41: '',
      ct51: '',
      ct52: '',
      ct61: '',
      ct62: '',
      days11: '',
      days12: '',
      days13: '',
      days21: '',
      days22: '',
      days23: '',
      days31: '',
      days41: '',
      days51: '',
      days52: '',
      days61: '',
      quality1: '',
      claim11: '',
      claim12: '',
      claim21: '',
      claim22: '',
      claim31: '',
      claim32: '',
      claim41: '',
      claim42: '',
      claim51: '',
      claim52: '',
      claim61: '',
      claim62: '',
      risk11: '',
      risk12: '',
      risk21: '',
      risk22: '',
      risk31: '',
      risk32: '',
      risk41: '',
      risk42: '',
      risk51: '',
      risk52: '',
      risk61: '',
      risk62: '',
      risk71: '',
      risk72: '',
      risk81: '',
      risk82: '',
      risk91: '',
      risk92: '',
      val11: '',
      val12: '',
      val21: '',
      val22: '',
      val31: '',
      val32: '',
      val41: '',
      val42: '',
      measure11: '',
      measure12: '',
      measure13: '',
      measure21: '',
      measure22: '',
      measure23: '',
      measure31: '',
      measure32: '',
      pay11: '',
      pay12: '',
      pay31: '',
      pay32: '',
      pay41: '',
      pay42: '',
      pay71: '',
      pay72: '',
      pay82: '',
      pay91: '',
      pay101: '',
      pay111: '',
      pay112: '',
      pay121: '',
      pay122: '',
      paid11: '',
      paid12: '',
      paid13: '',
      paid14: '',
      paid21: '',
      paid22: '',
      paid23: '',
      paid24: '',
      paid31: '',
      paid32: '',
      paid33: '',
      paid34: '',
      paid41: '',
      paid42: '',
      paid43: '',
      paid44: '',
      paid51: '',
      paid52: '',
      paid53: '',
      paid54: '',
      sub11: '',
      sub12: '',
      sub21: '',
      sub22: '',
      sub31: '',
      sub32: '',
      sub41: '',
      sub42: '',
      sub51: '',
      sub52: '',
      sub61: '',
      sub62: '',
      sub71: '',
      sub72: '',
      sub81: '',
      sub82: '',
      riskDesc: '',
      done11: '',
      done21: '',
      done22: '',
      done31: '',
      done32: '',
      done41: '',
      done42: '',
      done51: '',
      persist11: '',
      persist21: '',
      persist31: '',
      solve11: '',
      other11: ''
    };
  }

  pay21(a: Date, b: Date) {
    const date1 = new Date(a).getTime();
    const date2 = new Date(b).getTime();
    const day = this.jian(date1, date2);
    if (day < 0) {
      return '提前 ' + Math.abs(day) / 86400000 + '天';
    } else if (day === 0) {
      return '正常';
    } else {
      return '滞后 ' + day / 86400000 + '天';
    }
  }

  submit() {
    if (this.days31 === -1) {
      this.tableData.days31 = 0 - this.days34;
    } else if (this.days31 === 1) {
      this.tableData.days31 = this.days32;
    } else {
      this.tableData.days31 = '';
    }
    super.submit();
  }

  radioClick(type) {
    switch (type) {
      case 1:
        this.days32 = '';
        this.days34 = '';
        break;
    }

  }

  chu(a, b) {
    if (!this.data.isAllNull(a, b)) {
      return ((a / b) * 100).toFixed(2);
    }
  }

  add(a: number, ...b: number[]) {
    if (!this.data.isAllNull(a, ...b)) {
      let num = a;
      b.forEach(element => {
        num = num + element;
      });
      return num;
    } else {
      return '';
    }
  }

  jian(a, b) {
    if (!this.data.isAllNull(a, b)) {
      return a - b;
    }
  }
}
