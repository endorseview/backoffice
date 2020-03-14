import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'environments/environment';

export const authProdConfig: AuthConfig = {
    issuer: environment.IssuerUri,
    clientId: 'DmApp',
    requireHttps: environment.RequireHttps,
    redirectUri: environment.Uri + "/login-callback",
    silentRefreshRedirectUri: environment.Uri + '/silent-refresh.html',
    scope: "openid profile email dm-api",
    sessionChecksEnabled: true,
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
    waitForTokenInMsec: 5000
};
