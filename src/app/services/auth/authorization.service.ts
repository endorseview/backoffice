// import { Injectable } from '@angular/core';
// import { Observable, ReplaySubject } from 'rxjs';
// import { environment } from 'environments/environment';
// import { TokenViewModel, AuthService, TokenCreateModel } from '@alba/opis-auth-client';
// import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
// // import { navigationByRoles } from 'app/navigation/navigation';
// // import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
// import { ApplicationConfigurationsService } from '@alba/opis-application-configurations-client';
// import { TranslateService } from '@ngx-translate/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthorizationService {
//   constructor(
//     private _fuseNavigationService: FuseNavigationService,
//     private authService: AuthService,
//     // private jwtHelperService: JwtHelperService,
//     private applicationConfigurationsService: ApplicationConfigurationsService,
//     private _translateService: TranslateService,

//   ) {
//   }

//   loginCheckUrl = `${environment.apiBaseUrl}/login-check`;
//   refreshTokenUrl = `${environment.apiBaseUrl}/refresh-token`;

//   login(username: string, password: string): Observable<TokenViewModel> {
//     const req: TokenCreateModel = {
//       grantType: TokenCreateModel.GrantTypeEnum.Password,
//       refreshToken: null,
//       username: username,
//       password: password
//     };

//     const postObservable = this.authService.token(req, 'tr');


//     const subject = new ReplaySubject<TokenViewModel>(1);
//     subject.subscribe((r: TokenViewModel) => {
//       this.setAccessToken(r.accessToken);
//       this.setRefreshToken(r.refreshToken);
//       if (this.currentTenantIdentifier) {
//         this.setTenant(this.currentTenantIdentifier);
//       }

//       this.applicationConfigurationsService.getNavigationByRole('tr').subscribe(
//         navItems => {
//           this._fuseNavigationService.unregister('main');
//           this._fuseNavigationService.register('main', navItems);
//           this._fuseNavigationService.setCurrentNavigation('main');

//           // Use a language
//           // const browserLang = this._translateService.getBrowserLang();
//           this._translateService.use('en');
//           this._translateService.use('tr');

//         }
//       );
//     }, (err) => {
//       this.handleAuthenticationError(err);
//     });

//     postObservable.subscribe(subject);
//     return subject;
//   }

//   refresh(): Observable<TokenViewModel> {

//     const req: TokenCreateModel = {
//       grantType: TokenCreateModel.GrantTypeEnum.RefreshToken,
//       refreshToken: this.getRefreshToken,
//     };

//     const refreshObservable = this.authService.token(req, 'tr');

//     const refreshSubject = new ReplaySubject<TokenViewModel>(1);
//     refreshSubject.subscribe((r: TokenViewModel) => {
//       this.setAccessToken(r.accessToken);
//       this.setRefreshToken(r.refreshToken);
//     }, (err) => {
//       this.handleAuthenticationError(err);
//     });

//     refreshObservable.subscribe(refreshSubject);
//     return refreshSubject;
//   }

//   logout(): void {
//     this.setAccessToken(null);
//     this.setRefreshToken(null);
//     this.setTenant(null);
//   }

//   public get isAuthenticated(): boolean {
//     return !!this.getAccessToken;
//   }

//   public get currentUserRole(): string {
//     const token = this.getAccessToken;
//     if (token === null) {
//       return null;
//     }

//     const decodeToken = this.jwtHelperService.decodeToken(token);
//     if (!decodeToken) {
//       return null;
//     }
//     return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
//   }

//   private get currentTenantIdentifier(): string {
//     const token = this.getAccessToken;
//     if (token === null) {
//       return null;
//     }

//     const decodeToken = this.jwtHelperService.decodeToken(token);
//     if (!decodeToken) {
//       return null;
//     }
//     return decodeToken['TenantIdentifier'];
//   }

//   public get getAccessToken(): string {
//     return localStorage.getItem('access_token');
//   }

//   public get getRefreshToken(): string {
//     return localStorage.getItem('refresh_token');
//   }

//   private setTenant(identifier: string): void {
//     if (!identifier) {
//       localStorage.removeItem('tenant_identifier');
//     } else {
//       localStorage.setItem('tenant_identifier', identifier);
//     }
//   }

//   private handleAuthenticationError(err: any): void {
//     // TODO: Only for authentication error codes
//     this.setAccessToken(null);
//     this.setRefreshToken(null);
//   }

//   private setAccessToken(accessToken: string): void {
//     if (!accessToken) {
//       localStorage.removeItem('access_token');
//     } else {
//       localStorage.setItem('access_token', accessToken);
//     }
//   }

//   private setRefreshToken(refreshToken: string): void {
//     if (!refreshToken) {
//       localStorage.removeItem('refresh_token');
//     } else {
//       localStorage.setItem('refresh_token', refreshToken);
//     }
//   }
// }
