import { MeiboComponent } from './../meibo/meibo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.router';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from '../product/product.component';
import { CaseComponent } from '../case/case.component';
import { StoreComponent } from '../store/store.component';
import { NewsComponent } from '../news/news.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { CultureComponent } from '../about/culture/culture.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    MeiboComponent,
    ProductComponent,
    CaseComponent,
    StoreComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    CultureComponent
  ],
  providers: [
    ProductComponent
  ]
})
export class HomeModule { }
