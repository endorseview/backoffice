// Angular imports
import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeTrExtra from '@angular/common/locales/extra/tr';
import localeTr from '@angular/common/locales/tr';
import { NgModule } from '@angular/core';
// Material imports
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
// Fuse imports
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
// Jwt imports
// Alba Client Modules 
// import { OpisAuthClientClientModule, OpisAuthClientConfiguration } from '@alba/opis-auth-client';
// import { OpisTenantsClientClientModule } from '@alba/opis-tenants-client';
// import { ApplicationConfigurationsClientClientModule } from '@alba/opis-application-configurations-client';
// import { OpisDbServersClientClientModule } from '@alba/opis-dbservers-client';
// import { OpiCampaignsClientClientModule } from '@alba/opis-campaigns-client';
// import { OpisIdentityClientClientModule } from '@alba/opis-identity-client';
// Tabak Modules
// import { TabakFormsMaterialUIModule } from '@tabak/ng-forms';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
// Translator imports
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { AuthorizationService } from './services/auth/authorization.service';
// import { RefreshTokenInterceptor } from './services/auth/ refresh-token-interceptor';
import { fuseConfig } from 'app/fuse-config';
import { LayoutModule } from 'app/layout/layout.module';
import { environment } from 'environments/environment';
import 'hammerjs';
import { MonacoEditorModule } from 'ngx-monaco-editor';
// imports for restangular
import { RestangularModule } from 'ngx-restangular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
// import { NgValidatorsModule, uuid, equalTo, gt, gte, lt, lte } from '@tabak/ng-validators';
// Application imports
import { AppRoutingModule } from './app.routing.module';
import { StorageService } from './core/auth/_services/storage.service';
// import { OpisMembersClientClientModule } from '@alba/opis-members-client';
// import { OpisConfigurationsClientClientModule } from '@alba/opis-configurations-client';
// import { OpisPromotionsClientClientModule } from '@alba/opis-promotions-client';
import { CoreModule } from './core/core.module';
import { TenantsPanelModule } from './layout/components/tenants-panel/tenants-panel.module';
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import { AppLoaderComponent } from './services/app-loader/app-loader.component';



// AoT requires an exported function for factories
// export function tabakApiConfig(): OpisAuthClientConfiguration {
//     return new OpisAuthClientConfiguration({
//         apiKeys: {},
//         basePath: environment.apiBaseUrl
//     });
// }

// Tabak Api config sample for Tabak mocker 
// export function getCampaignsConfig(): OpiCampaignsClientConfiguration {
//     return new OpiCampaignsClientConfiguration({
//         apiKeys: {},
//         basePath: 'https://mock-opis.azurewebsites.net/campaigns'
//     });
// }

export function tokenGetter(): string {
    return localStorage.getItem('access_token');
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function RestangularConfigFactory(RestangularProvider, storageService): void {
    RestangularProvider.setBaseUrl(environment.apiBaseUrl);
    RestangularProvider.setDefaultHeaders({ 'Content-Type': ['application/json;', 'multipart/form-data;'] });

    RestangularProvider.addErrorInterceptor((response, subject, responseHandler, router) => {
        if (response.status === 0) {
            //     window.location.href = '/login'; // bu kisim acilabilir ama suan timeout sorunnundan dolayi kapatiyorum
        }

        if (response.status === 409) {
            if (response.data.error === 'Access is denied') {
                response.data.error = 'Erişim yetkiniz yok';
                response.data.error_description = 'Erişim yetkiniz yok';
            }
        }
        return response;
    });


    RestangularProvider.addResponseInterceptor((data, operation, what, url, response) => {
        const token = storageService.getAuthToken();

        if (token) {
            RestangularProvider.setDefaultHeaders({
                'Content-Type': ['application/json;', 'multipart/form-data;'],
                'Authorization': 'Bearer ' + token
            });
        }
        return data;
    });


    RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
        const token = storageService.getAuthToken();
        let extraHeaders = {};
        if (token) {
            extraHeaders = {
                Authorization: 'Bearer ' + token
            };
        }
        // debugger;
        return {
            headers: Object.assign({}, headers, extraHeaders, { 'Content-Type': ['application/json;', 'multipart/form-data;'], })
        };
    });
}

registerLocaleData(localeTr, 'tr', localeTrExtra);

@NgModule({
    declarations: [AppComponent, AppLoaderComponent, AppComfirmComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,

        CoreModule.forRoot(),

        // Translate Module
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        // Importing RestangularModule and making default configs for restanglar
        RestangularModule.forRoot([StorageService], RestangularConfigFactory),

        // Dynamic Forms & Tabak Material 
        DynamicFormsCoreModule.forRoot(),
        // TabakFormsMaterialUIModule,

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        TenantsPanelModule,

        // Opis Api modules

        // Ngx-Spinner
        NgxSpinnerModule,
        // Ngx-Monaco-Editor
        MonacoEditorModule.forRoot()
    ],
    entryComponents: [AppLoaderComponent, AppComfirmComponent],
    providers: [
        // AuthorizationService,
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'tr'
        },
        // {
        //     provide: DYNAMIC_VALIDATORS,
        //     useValue: new Map<string, Validator | ValidatorFactory>([
        //         ['uuid', uuid],
        //         ['equalTo', equalTo],
        //         ['gt', gt],
        //         ['gte', gte],
        //         ['lt', lt],
        //         ['lte', lte],
        //     ])
        // },

    ],

    bootstrap: [AppComponent],
})
export class AppModule { }
