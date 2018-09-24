import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserComponent } from './admin/user/user.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ButtonComponent } from './admin/dashboard/button/button.component';
import { EchartsComponent } from './admin/dashboard/echarts/echarts.component';
import { HomeComponent } from './home/home.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: 'app/home/home.module#HomeModule',
      data: {
        preload: true
    }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children:
            [{
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                children:
                    [
                        {
                            path: '',
                            redirectTo: 'button',
                            pathMatch: 'full'
                        },
                        {
                            path: 'button',
                            component: ButtonComponent
                        },
                        {
                            path: 'echarts',
                            component: EchartsComponent
                        },
                        {
                            path: '**',
                            component: ButtonComponent
                        }]
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'setting',
                loadChildren: 'app/admin/setting/setting.module#SettingModule',
                data: {
                    preload: true
                }
            },
            {
                path: '**',
                component: AdminComponent
            }]
    },
    {
        path: '**',
        component: LoginComponent
    }
];
