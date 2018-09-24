import { Component } from '@angular/core';
import { CaseComponent } from './../case/case.component';
import { MeiboComponent } from "../meibo/meibo.component";
import { HomeComponent } from "./home.component";
import { ProductComponent } from '../product/product.component';
import { StoreComponent } from '../store/store.component';
import { NewsComponent } from '../news/news.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';


export const HomeRoutes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            },
            {
              path: 'products',
              component: ProductComponent
            },
            {
              path: 'index',
              component: MeiboComponent
            },
            {
              path: 'case',
              component: CaseComponent
            },
            {
              path: 'store',
              component: StoreComponent
            },
            {
              path: 'news',
              component: NewsComponent
            },
            {
              path: 'contact',
              component: ContactComponent
            },
            {
              path: 'about',
              component: AboutComponent
            },
            {
              path: '**',
              component: MeiboComponent
           }
           ]
    }
];
