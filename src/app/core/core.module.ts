import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthConfig, JwksValidationHandler, OAuthModule, OAuthModuleConfig, OAuthStorage, ValidationHandler } from 'angular-oauth2-oidc';
import { authProdConfig } from './auth/auth-config.prod';
import { AuthGuardWithForcedLogin } from './auth/auth-guard-with-forced-login.service';
import { AuthGuard } from './auth/auth-guard.service';
import { authModuleConfig } from './auth/auth-module-config';
import { OAuthenticationService } from './auth/auth.service';
import { StorageService } from './auth/_services/storage.service';
import { SettingsService } from './settings/settings.service';
import { TranslatorService } from './translator/translator.service';

export function storageFactory(): OAuthStorage {
  return localStorage;
}

@NgModule({
  imports: [
    CommonModule,
    OAuthModule.forRoot(),
  ],
  // declarations: [TitleComponent],
  // exports: [TitleComponent],
  providers: [
    TranslatorService,
    SettingsService,
    OAuthenticationService,
    AuthGuard,
    AuthGuardWithForcedLogin,
    StorageService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        TranslatorService,
        SettingsService,
        StorageService,
        { provide: AuthConfig, useValue: authProdConfig },
        { provide: OAuthModuleConfig, useValue: authModuleConfig },
        { provide: ValidationHandler, useClass: JwksValidationHandler },
        { provide: OAuthStorage, useFactory: storageFactory }
      ]
    };
  }
}
