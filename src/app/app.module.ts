import { HttpService } from './core/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app.router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ButtonComponent } from './admin/dashboard/button/button.component';
import { EchartsComponent } from './admin/dashboard/echarts/echarts.component';
import { SelectivePreloadingStrategy } from './shared/router-config/preloading-strategy';
import { HomeComponent } from './home/home.component';
import { MeiboComponent } from './meibo/meibo.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ButtonComponent,
    EchartsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategy, useHash: true })
  ],
  providers: [
    HttpService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    SelectivePreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
