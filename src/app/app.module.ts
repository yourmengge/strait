import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';
import { ApiService } from './api.service';

import { PopoverModule, AlertModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { StaticService } from './static.service';
import { HttpModule } from '@angular/http';
import { TAB051Component } from './tab051/tab051.component';
import { TAB012Component } from './tab012/tab012.component';
import { Tab011Component } from './tab011/tab011.component';
import { XmmbzrglComponent } from './xmmbzrgl/xmmbzrgl.component';
import { XcjfmxComponent } from './xcjfmx/xcjfmx.component';
import { ChydpdComponent } from './chydpd/chydpd.component';
import { TAB091Component } from './tab091/tab091.component';
import { TAB151Component } from './tab151/tab151.component';
import { TAB161Component } from './tab161/tab161.component';
import { TAB181Component } from './tab181/tab181.component';
import { TAB081Component } from './tab081/tab081.component';
import { TAB021Component } from './tab021/TAB021.component';
import { TAB052Component } from './tab052/TAB052.component';
import { TAB071Component } from './tab071/tab071.component';
import { AlertComponent } from './alert/alert.component';
import { Tab031Component } from './tab031/tab031.component';
import { Tab201Component } from './tab201/tab201.component';
import { Tab141Component } from './tab141/tab141.component';
import { Tab211Component } from './tab211/tab211.component';
import { Tab061Component } from './tab061/tab061.component';
import { Tab231Component } from './tab231/tab231.component';
import { Tab121Component } from './tab121/tab121.component';
import { Tab101Component } from './tab101/tab101.component';
import { GetFileNamePipe } from './get-file-name.pipe';
import { Tab241Component } from './tab241/tab241.component';

const appChildRoutes: Routes = [
  { path: 'TAB241', component: Tab241Component }, // 24.考核月报
  { path: 'TAB231', component: Tab231Component }, // 23.工程统计报表
  { path: 'TAB061', component: Tab061Component }, // 6.2018年度四坚持一推进开展情况表
  { path: 'TAB211', component: Tab211Component }, // 21.在施项目A级分包企业使用情况月报告
  { path: 'TAB141', component: Tab141Component }, // 14.成本晾晒报表
  { path: 'TAB201', component: Tab201Component }, // 20.合同台账
  { path: 'TAB031', component: Tab031Component }, // 3.专项策划月进度情况报表
  { path: 'TAB071', component: TAB071Component }, // 7.分包结算报送套表
  { path: 'TAB052', component: TAB052Component }, // 5.业主中间计量、已完工未结算款金额统计表
  { path: 'TAB021', component: TAB021Component }, // 2.班组分包签证台账
  { path: 'TAB081', component: TAB081Component }, // 8.分包分供合同履约监控报表
  { path: 'TAB181', component: TAB181Component }, // 18.钢筋精细化管理报表
  { path: 'TAB161', component: TAB161Component }, // 16.月度盘点表
  { path: 'TAB151', component: TAB151Component }, // 15.合同外垫资报表
  { path: 'TAB121', component: Tab121Component }, // 12.分包商季度考察评价表
  { path: 'TAB091', component: TAB091Component }, // 9.总包履约监控报表
  { path: 'TAB101', component: Tab101Component }, // 10.商务经理月报
  { path: 'chydpd', component: ChydpdComponent }, // 16.月度盘点表
  { path: 'xcjfmx', component: XcjfmxComponent }, // 11.现场经费
  { path: 'xmmbzrgl', component: XmmbzrglComponent }, // 4.项目目标责任考核计划表
  { path: 'TAB011', component: Tab011Component }, // 1.商务索赔台账
  { path: 'TAB012', component: TAB012Component }, // 1.月商务索赔报表
  { path: 'TAB051', component: TAB051Component }, // 5.甲方中间计量台账
  { path: '', redirectTo: '', pathMatch: 'full' }
];

const router: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, children: appChildRoutes },
  { path: '', component: LoginComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TAB051Component,
    TAB012Component,
    Tab011Component,
    TAB071Component,
    AlertComponent,
    Tab231Component,
    GetFileNamePipe,
    Tab241Component,
    Tab101Component,
    Tab121Component,
    Tab061Component,
    Tab141Component,
    Tab211Component,
    Tab201Component,
    Tab031Component,
    TAB052Component,
    TAB021Component,
    TAB181Component,
    XmmbzrglComponent,
    XcjfmxComponent,
    ChydpdComponent,
    TAB081Component,
    TAB091Component,
    TAB151Component,
    TAB161Component
  ],
  imports: [
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(router, { enableTracing: true, useHash: true }),
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, ApiService, StaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
