import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'environments/environment';

export const authConfig: AuthConfig = {
    issuer: environment.IssuerUri,
    clientId: 'DmApi',
    requireHttps: environment.RequireHttps,
    redirectUri: environment.Uri + "/login-callback",
    silentRefreshRedirectUri: environment.Uri + '/silent-refresh.html',
    scope: "openid profile email opis-api",
    silentRefreshTimeout: 5000, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: true,
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
    waitForTokenInMsec: 5000
};
