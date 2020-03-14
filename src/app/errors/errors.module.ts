import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { Error404Component } from './404/error-404.component';
import { Error500Component } from './500/error-500.component';
import { Error401Component } from './401/error-401.component';
import { TranslateModule } from '@ngx-translate/core';

const routes = [
    {
        path: '401',
        component: Error401Component,
    },
    {
        path: '404',
        component: Error404Component,
    },
    {
        path: '500',
        component: Error500Component,
    },
];

@NgModule({
    declarations: [Error401Component, Error404Component, Error500Component],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        MatIconModule,
        FuseSharedModule],
})
export class ErrorsModule { }
