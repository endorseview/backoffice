import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';
// import { RegisterComponent } from './register/register.component';

const routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'forgot',
        component: ForgotPasswordComponent,
    },
    {
        path: 'reset',
        component: ResetPasswordComponent,
    },
    {
        path: 'confirm',
        component: MailConfirmComponent,
    },
    // {
    //     path: 'register',
    //     component: RegisterComponent,
    // },
];

@NgModule({
    declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, MailConfirmComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
    ],
})
export class AuthenticationModule { }
