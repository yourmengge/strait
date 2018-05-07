import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './data.service';
import { HttpService } from './http.service';

import { PopoverModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { StaticService } from './static.service';

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
    HttpClientModule
  ],
  providers: [DataService, HttpService, StaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
