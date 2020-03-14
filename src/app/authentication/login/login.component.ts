import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { SettingsService } from "../../core/settings/settings.service";
import { Subscription } from "rxjs";
import { TranslatorService } from 'app/core/translator/translator.service';
import { OAuthenticationService } from 'app/core/auth/auth.service';

@Component({
    selector: "app-dashboard",
    templateUrl: "login.component.html",
    providers: [SettingsService, TranslatorService]
})
export class LoginComponent implements OnInit, OnDestroy {
    stream: Subscription;

    constructor(
        private authService: OAuthenticationService,
        private router: Router,
        public translator: TranslatorService) {

    }

    public ngOnInit() {
        this.stream = this.authService.canActivateProtectedRoutes$.subscribe(yes => {
            if (yes)
                return this.router.navigate(['/home']);
            else
                this.authService.login('/login-callback');
        });
    }

    public ngOnDestroy() {
        this.stream.unsubscribe();
    }

}
