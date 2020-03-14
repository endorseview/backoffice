/**
 * @author Taner
 * @summary Storage service for auth (getting&setting Token and possible Tenant data)
 */
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AppToken';
const ACCOUNT_KEY = 'AppAccount';
const TENANT_KEY = 'AppTenant';

@Injectable()
export class StorageService {
    getTenant(): any {
        return JSON.parse(localStorage.getItem(TENANT_KEY));
    }

    setTenant(tenant): void {
        localStorage.setItem(TENANT_KEY, JSON.stringify(tenant));
        // debugger;
    }

    removeTenant(): void {
        localStorage.removeItem(TENANT_KEY);
    }

    getAuthToken(): string {
        // return JSON.parse();
        return localStorage.getItem(TOKEN_KEY);
    }

    setAuthToken(token): void {
        localStorage.setItem(TOKEN_KEY, token);
    }

    removeAuthToken(): void {
        localStorage.removeItem(TOKEN_KEY);
    }

    getAccount(): any {
        return JSON.parse(localStorage.getItem(ACCOUNT_KEY));
    }

    setAccount(account): void {
        localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
    }

    removeAccount(): void {
        localStorage.removeItem(ACCOUNT_KEY);
    }


}
