import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
const router: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(router, { enableTracing: true }),
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [DataService, ApiService, StaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
